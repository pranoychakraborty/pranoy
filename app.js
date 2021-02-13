const express = require('express')
const path=require('path')
const hbs=require('hbs')
const whe=require('../request_http/whe.js')
const cordi=require('../request_http/cordi.js')
const { query } = require('express')
const app= express()
const jointemplates= path.join(__dirname,'./public')
const joinview= path.join(__dirname,'./templates/views')
const joinpartials= path.join(__dirname,'./templates/partials')
app.use(express.static(jointemplates))
app.set('view engine','hbs')
app.set('views',joinview)
hbs.registerPartials(joinpartials)

app.get('',(req,res)=>{
    address=req.query.search

    res.render('index',{
        title: "Weather App",
        
    })

})
app.get('/about',(req,res)=>{
    res.render('about',{
        title: "About"
    })
})
app.get('/home',(req,res)=>{
    res.render('home',{
        title:'Home Page'
    })
})
app.get('/weather',(req,res)=>{
    address=req.query.search
    global.data1=''
    global.location
    global.latitude
    global.longitude
    whe.geocode(address, (error,data)=>{
        
        if(error){
            res.send({
                Error: "Error!!. For address wrong input/ network connection!!"
            })

        }  else{
           
            
            location=data.loc_name
            latitude=data.latitude
            longitude=data.longitude
            cordi.wh_temp(data.latitude,data.longitude, (error,data)=>{
            if(error){
                
                res.send({
                    Error:"Error in co-ordinate input"
                })
            }else{
            
            data1=data.toString()
            
            res.send({
                location_name: location,
                latitude: latitude,
                longitude: longitude,
                Weather_Report: data1
            }) 
            }
            
      })
      
     
    }
    
    })
    

    
})
app.get('*',(req,res)=>{
    res.send('<h3>404 Error!! Page not found</h3>')
})

app.listen(3000,()=>{
    console.log("server is up!!")
})
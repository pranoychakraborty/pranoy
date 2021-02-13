const request= require('request')

const wh_temp=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=cd1548db3f233764a6a4f9e84fd14cf3&query='+ latitude +','+ longitude
    request({ url},(error,response)=>{
        const parse=JSON.parse(response.body)
    if(error){
        console.log("could not connect to the server!!")
        callback('unable to connect to server',undefined)
    }else if(parse.error){
        console.log('Enter correct address!!')
        callback('enter correct address!!',undefined)
    }else{
        
    
    callback(undefined,'Temparature: '+ parse.current.temperature+' degree cel .'+'It feels like: '+parse.current.feelslike+' degree cel. And last observation time: '+parse.current.observation_time)
    
    
    }
}) 
}

/*wh_temp(22.570,88.370, (error,data)=>{
    console.log('data: '+data)
    console.log('error: '+error )
})*/
module.exports= {wh_temp:wh_temp}
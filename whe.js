const request= require('request')

const geocode=(address,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=cd1548db3f233764a6a4f9e84fd14cf3&query='+ address
   
    request({ url},(error,response)=>{
        const parse=JSON.parse(response.body)
    if(error){
        console.log("could not connect to the server!!")
        callback('unable to connect',undefined)
    }else if(parse.error){
        console.log('Enter correct address!!')
        callback('enter correct address',undefined)
    }else{
        
    
    const latitude= parse.location.lat
    const longitude=parse.location.lon
    const loc_name=parse.location.name
    callback(undefined,{ latitude,longitude,loc_name})
    /*callback(undefined,'latitude: '+parse.location.lat+' '+'longitude :'+parse.location.lon)
    */
    }
})
}

/*geocode('kolkata', (error,data)=>{
    console.log('data: '+data)
    console.log('error: '+error )
})*/
module.exports={ geocode:geocode}
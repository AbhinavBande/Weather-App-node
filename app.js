const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')

if(process.argv[2]){
    geocode(process.argv[2], (error,{location, latitude, longitude})=>{
        if(error){
            return console.log(error)
        }
    
        forecast(latitude,longitude,(error,message)=>{
            if(error){
                return console.log(error)
            }
            console.log(location)
            console.log(message)
        })
    })
} else{
    console.log('please enter location')
}




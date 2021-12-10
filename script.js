document.querySelector('header > h1').innerText = "Hotel Booking"
document.querySelector('header > h2').innerText = "You won't want to leave"


//could make this vv more basic by saying getAPIData. 
async function getHotelData() {
    try{
        const response = await fetch("hotel.json") 
        return await response.json() //Returns the JSON object <<

     } catch (error){
         console.error(error)
     }

}

//gives us access to hotel data. 
let hotelData = {}
getHotelData().then(data => hotelData = data)


//store in a variable, use that varibale to loop over each element and addEventListener to each one. 
let hotelSelection = document.querySelectorAll('a')
hotelSelection.forEach(() => addEventListener('click', hotelInfo))
console.log(hotelSelection)

//document.querySelector("#marriott").addEventListener('click', hotelInfo)

function hotelInfo(event) {
let hotelChoice = hotelData.hotels.find(hotel =>{
    return event.target.id === hotel.name.toLowerCase()
})
console.log(hotelChoice)


document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`
document.querySelector('#address').textContent = `${hotelChoice.address}`
document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`
document.querySelector('#gym').textContent = `${hotelChoice.gym}`
document.querySelector('#type').textContent = `${hotelChoice.roomTypes}`

let hotelPic = document.querySelector('#picture')

hotelPic.src = `${hotelChoice.picture}`


}
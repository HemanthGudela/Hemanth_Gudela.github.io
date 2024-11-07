//sample data array of palces 
const places = [
    {
    name:"Mangalore,Karnataka",
    description:"The city of beaches,backwaters,my btech college National Institue of technology Karnataka",
    imageUrl:"images\mangalore.jpg"
},
{
    name:"Bangalore,Karnataka",
description:"Silicon Valley Of India",
imageUrl:"images\bangalore.jpg"
}

];

//Function to display trvale places 
function displayPlace(){
    const gallery = document.querySelector(".gallery");
    places.forEach(place=>{
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<img src="${place.imageUrl}" alt="${place.name}">
        <div class="card-content">
            <h3>${place.name}</h3>
            <p>${place.description}</p>
            </div>
            `;
            gallery.appendChild(card);
    });
}
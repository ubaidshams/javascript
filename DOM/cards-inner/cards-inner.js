let tripData=[
    {
        img:"https://cdn.pixabay.com/photo/2015/02/21/09/53/sea-644085__340.jpg",
        title:"Gokarna",
        description:"Gokarna is a town on the Arabian Sea, in the southwestern Indian state of Karnataka.",
        color:"#845EC2"
    },
    {
        img:"https://cdn.pixabay.com/photo/2016/03/27/17/26/water-1283199__340.jpg",
        title:"Kerala",
        description:"Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline.",
        color:"#FFB896"
    },
    {
        img:"https://cdn.pixabay.com/photo/2020/09/17/18/10/palace-5579991__480.jpg",
        title:"Mysore",
        description:"Mysore (or Mysuru), a city in India's southwestern Karnataka state, was the capital of the Kingdom of Mysore from 1399 to 1947. ",
        color:"#5DFACA"
    }
]

let tripContent=document.getElementById("tripBlock");
let op=[]
tripData.forEach((trip)=>{
    op+=`
    <div class="tripContainer" style="background:${trip.color}">
    <figure>
    <img src=${trip.img} alt=${trip.title}/>
    </figure>
    <h1>${trip.title}</h1>
    <p>${trip.description}</p>
    </div>
    `;
});
tripContent.innerHTML=op;
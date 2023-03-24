// dom referencer
const pointBox = document.querySelector("#score"); //point tavle
const dragFoodBox =  document.querySelectorAll(".foodcontainer article");  //mad
const targetAnimal = document.querySelectorAll ("#animals div"); //dyrene 
const foodBox = document.querySelector(".foodcontainer"); //madkassen
const gameDone = document.querySelector(".fade-out animate__animated")
//events på elementerne

let link = document.querySelector("#linktilsandbox");


dragFoodBox.forEach(function(element){
element.addEventListener("dragstart",startDrag);
})

targetAnimal.forEach(function(element){
    element.addEventListener("dragover", cancelDefault);
    element.addEventListener("drop", dropMad);
})



function startDrag (event){
    
    event.dataTransfer.setData("foodId", this.id);
    event.dataTransfer.setData("foodName", this.dataset.food);
}

function cancelDefault(event) {
    event.preventDefault();
   

}


function dropMad(event){
 
   let madId = event.dataTransfer.getData ("foodId");
   let madType = event.dataTransfer.getData ("foodName");
   
    


   if (madType == this.dataset.food || madType == this.dataset.food2 ) {
    let heart = document.createTextNode("❤");
    this.appendChild(heart);
    
    console.log(this);
    
    this.classList.add('animate__animated', 'animate__flip');
    setInterval(() => {
        this.classList.remove('animate__animated', 'animate__flip');
    }, 3000);


    pointBox.innerHTML = parseInt(pointBox.innerHTML) + 200;

   } else {
    
    alert ("gør det nu ordentligt")
    pointBox.innerHTML = parseInt(pointBox.innerHTML) - 200;
    foodBox.removeChild(document.querySelector("#" + madId));
}

 if (pointBox.innerHTML >= 1000){
    alert ('Tilykke');
    document.body.classList.remove("animate__backInRight");
    document.body.classList.add("animate__lightSpeedOutRight");
    setTimeout(function () {
    window.location.href = "vinder.html";
    }, 700)
}}
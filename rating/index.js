const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const rating = document.querySelector(".rating")
const circles = document.querySelector(".circles")
const submit = document.querySelector("#submit")
const submitContainer = document.querySelector(".submit_container")

two.addEventListener("mouseover", ()=>{
    one.classList.add("active")
})
two.addEventListener("mouseleave", ()=>{
    one.classList.remove("active")
})

three.addEventListener("mouseover", ()=>{
    one.classList.add("active")
    two.classList.add("active")
})
three.addEventListener("mouseleave", ()=>{
    one.classList.remove("active")
    two.classList.remove("active")
})

four.addEventListener("mouseover", ()=>{
    one.classList.add("active")
    two.classList.add("active")
    three.classList.add("active")
})
four.addEventListener("mouseleave", ()=>{
    one.classList.remove("active")
    two.classList.remove("active")
    three.classList.remove("active")
})

five.addEventListener("mouseover", ()=>{
    one.classList.add("active")
    two.classList.add("active")
    three.classList.add("active")
    four.classList.add("active")
})
five.addEventListener("mouseleave", ()=>{
    one.classList.remove("active")
    two.classList.remove("active")
    three.classList.remove("active")
    four.classList.remove("active")
})

function ratingvalue(rating){
    value = rating
    console.log(value)
    return value
}


one.addEventListener("click", ()=>{
    one.classList.add("selected")
    two.classList.remove("selected")  
    three.classList.remove("selected")  
    four.classList.remove("selected")  
    five.classList.remove("selected")  
    ratingvalue(1)
})
two.addEventListener("click", ()=>{
    two.classList.add("selected")
    one.classList.remove("selected")  
    three.classList.remove("selected")  
    four.classList.remove("selected")  
    five.classList.remove("selected") 
    ratingvalue(2)
})
three.addEventListener("click", ()=>{
    three.classList.add("selected")
    one.classList.remove("selected")  
    two.classList.remove("selected")  
    four.classList.remove("selected")  
    five.classList.remove("selected") 
    ratingvalue(3)
})
four.addEventListener("click", ()=>{
    four.classList.add("selected")
    one.classList.remove("selected")  
    three.classList.remove("selected")  
    two.classList.remove("selected")  
    five.classList.remove("selected") 
    ratingvalue(4)
})
five.addEventListener("click", ()=>{
    five.classList.add("selected")
    one.classList.remove("selected")  
    three.classList.remove("selected")  
    four.classList.remove("selected")  
    two.classList.remove("selected") 
    ratingvalue(5)
})

console.log(submit)
submit.addEventListener("click"
, ()=>{
    if(one.classList.contains("selected") || two.classList.contains("selected") || three.classList.contains("selected")  || four.classList.contains("selected") || five.classList.contains("selected")){
        submitContainer.classList.add("active")
        rating.textContent = `You selected ${ratingvalue(value)} out of 5`
    }
    else{
        alert("Please select a rating")
    }
})
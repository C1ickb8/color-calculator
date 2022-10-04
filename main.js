const prompt = require('prompt-sync') ({sigint: true});

let choice = String(prompt("Would you like to combine or deconstruct?: "))
    console.log("You've chosen " + choice);

let red = "red"
let blue = "blue"
let yellow = "yellow"
let purple = "purple"
let orange = "orange"
let green = "green"

if(choice === "combine"){       
color1 = String(prompt("Select red or blue: "))
color2 = String(prompt("Select blue or yellow: ")) 
    if(color1 === red && color2 === blue){
    console.log("The combined color is purple")
        } else if(color1 === red && color2 === yellow){
        console.log("The combined color is orange")
            } else if(color1 === blue && color2 === yellow){
            console.log("The combined color is green")
            } 
    } 

if(choice === "deconstruct"){
color3 = String(prompt("Enter purple, orange, or green: "));
    if(color3 === purple){
    console.log("The deconstructed colors are red and blue")
        } else if(color3 === orange){
        console.log("The deconstructed colors are red and yellow")
            } else if(color3 === green){
            console.log("The deconstructed colors are blue and yellow")
            }    
} else{
    console.log("error")
}













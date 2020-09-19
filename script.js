var css = document.querySelector("h3");
var body = document.getElementById("bodyBackground");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var btn = document.getElementById("tryRandomColor")

function changeBackground(){
    body.style.background = 
    "linear-gradient(to right," 
    + color1.value 
    + " , " 
    + color2.value  
    + ")";

    css.textContent = body.style.background + ";";
}

function changeColor(){
    body.style.background = 
    "linear-gradient(to right, rgb("+rgb11()+", "+rgb11()+", "+rgb11()+"), rgb("+rgb11()+", "+rgb11()+", "+rgb11()+"))";

    css.textContent = body.style.background + ";"; 
}


color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
btn.addEventListener("click", changeColor);


 function rgb11(){
    return Math.floor(Math.random() * 255);
};


// var unique = (function() {                             // wrap everything in an IIFE
//     var arr = [];                                        // the array that contains the possible values
//     for(var i = 0; i < 100; i++)                         // fill it
//       arr.push(i);
    
//     return function() {                                  // return the function that returns random unique numbers
//       if(!arr.length)                                    // if there is no more numbers in the array
//         return alert("No more!");                        // alert and return undefined
      
//       var rand = Math.floor(Math.random() * arr.length); // otherwise choose a random index from the array
//       return arr.splice(rand, 1) [0];                    // cut out the number at that index and return it
//     };
//   })();
  
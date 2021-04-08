// quick and simple number guessing game from a course below

// while(true) {
//   let number = prompt("Guess the number:");
//       number = Number(number);

//   const randomNumber = Math.ceil(Math.random() * 10)

//   if(number === randomNumber) {
//     alert("YOU WIN");
//     break;
//   } else {
//   console.log("You guessed", number, "But the right was", randomNumber);
//   }
// }

var maxNumber = window.prompt("What should the maximum guess be?");

while(true) {
   
    if(maxNumber < 1) {
        alert('Invalid Entry');

        var maxNumber = prompt("Choose a positive number, greater than 0.");

     } else if ( /^[0-9.,]+$/.test(maxNumber)) {

            alert('Take a Guess between 1 and' + " " + maxNumber);
     break;
    }
    }

let random = Math.floor(Math.random()* maxNumber) + 1
console.log(random)

function userguess() {

    let guessbox = Number(document.getElementById("guessboxvalue").value);

let message = document.getElementById("message")

     if(guessbox < 1 || guessbox > maxNumber) {
        message.innerHTML = "That is not a number in range, try again!"

            } else if(guessbox == random) {
    message.innerHTML = "You got it!";

}     else if(guessbox > random) {
        message.innerHTML = "No, try a lower number!";

    } else if (guessbox < random) {
        message.innerHTML = "No, try a higher number!"; 
    }
    } 

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if ((charCode < 48 || charCode > 57))
        alert("That is not a number.");

    return true;
}

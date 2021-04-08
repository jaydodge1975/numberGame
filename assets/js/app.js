while(true) {
  let number = prompt("Guess the number:");
      number = Number(number);

  const randomNumber = Math.ceil(Math.random() * 10)

  if(number === randomNumber) {
    alert("YOU WIN");
    break;
  } else {
  console.log("You guessed", number, "But the right was", randomNumber);
  }
}

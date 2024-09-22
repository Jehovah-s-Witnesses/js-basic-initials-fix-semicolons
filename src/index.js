const userName = prompt("What's your name?");
const userAge = prompt('How old are you?');
const welcomeMessage = `Hello ${userName}, you are ${userAge} years old.`;

alert(welcomeMessage);

const ageInFiveYears = Number(userAge) + 5;

alert(`In five years, you will be ${ageInFiveYears}.`);

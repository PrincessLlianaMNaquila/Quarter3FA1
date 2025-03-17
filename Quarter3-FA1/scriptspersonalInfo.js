let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let birthYear = prompt("Enter your birth year:");

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

document.getElementById("output").innerText = `Hello ${firstName} ${lastName}! How does it feel to be ${age} years old?`;

let agreesToShare = confirm("Do you agree to share your personal information with our site?");
if (agreesToShare) {
    console.log(`Name: ${nickname}\nHeight: ${heightFeet}’${heightRemainingInches}”\nWeight: ${weightInPounds.toFixed(3)} lbs`);
} else {
    console.log("User does not wish to share his/her information.");
}
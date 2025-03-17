let heightInInches = parseInt(prompt("Enter your height in inches:"));
let weightInKg = parseFloat(prompt("Enter your weight in kg:"));

if (!isNaN(heightInInches) && heightInInches > 0) {
    let heightFeet = Math.floor(heightInInches / 12);
    let heightRemainingInches = heightInInches % 12;
    let weightInPounds = weightInKg * 2.20462;

    alert(`Name: ${nickname}\nHeight: ${heightFeet}’${heightRemainingInches}”\nWeight: ${weightInPounds.toFixed(3)} lbs`);
} else {
    alert("Please enter a valid height in inches.");
}
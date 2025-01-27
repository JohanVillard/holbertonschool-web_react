function sumMajorCredits(subject1, subject2) {
    var majorCredits = {
        credits: (subject1 + subject2),
    };
    return majorCredits;
}
function sumMinorCredits(subject1, subject2) {
    var minorCredits = {
        credits: (subject1 + subject2),
    };
    return minorCredits;
}
var majorCredits = sumMajorCredits(10, 15);
if (majorCredits.credits === 25) {
    console.log("Test passed: Major credits are correct");
}
else {
    console.assert(majorCredits.credits === 25, "Major credits should be 25");
}
var minorCredits = sumMinorCredits(5, 10);
if (minorCredits.credits === 15) {
    console.log("Test passed: Minor credits are correct");
}
else {
    console.assert(minorCredits.credits === 15, "Minor credits should be 15");
}
var major = 10;
var minor = 5;
try {
    var badSum = major + minor;
    console.log(badSum);
}
catch (error) {
    console.log(error);
}

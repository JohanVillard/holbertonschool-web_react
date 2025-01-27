type Major = number & { __brand: "major" };
type Minor = number & { __brand: "minor" };

interface MajorCredits {
  credits: Major;
}

interface MinorCredits {
  credits: Minor;
}

function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
  const majorCredits: MajorCredits = {
    credits: (subject1 + subject2) as Major,
  };

  return majorCredits;
}

function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
  const minorCredits: MinorCredits = {
    credits: (subject1 + subject2) as Minor,
  };

  return minorCredits;
}

const majorCredits = sumMajorCredits(10, 15);
if (majorCredits.credits === 25) {
  console.log("Test passed: Major credits are correct");
} else {
  console.assert(majorCredits.credits === 25, "Major credits should be 25");
}

const minorCredits = sumMinorCredits(5, 10);
if (minorCredits.credits === 15) {
  console.log("Test passed: Minor credits are correct");
} else {
  console.assert(minorCredits.credits === 15, "Minor credits should be 15");
}

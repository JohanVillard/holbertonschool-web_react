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

export interface MajorCredits {
	credits: number;
	brand: 'Major';
}

export interface MinorCredits {
	credits: number;
	brand: 'Minor';
}

interface Subject {
	(subject1: MajorCredits | MinorCredits, subject2: MajorCredits | MinorCredits): number
}

export const sumMajorCredits: Subject =  function (subject1: MajorCredits, subject2: MajorCredits) {
	return (subject1.credits + subject2.credits);
}

export const sumMinorCredits: Subject =  function (subject1: MinorCredits, subject2: MinorCredits) {
	return (subject1.credits + subject2.credits);
}

//Test
const major: MajorCredits = {
    credits: 40,
    brand: 'Major',
};

const minor: MinorCredits = {
    credits: 20,
    brand: 'Minor',
};
console.log(major);
console.log(minor);
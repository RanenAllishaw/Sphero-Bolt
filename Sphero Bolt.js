// Programmer: Ranen Allishaw
// Date: 02.06.2023
// Project: Sphero Bolt Testing
// Version: 1.2
// Bolt: 183F


/**
 * Hello World Practice Program
 * LED turns to Maroon
 * Forward fo 2 seconds at 60 speed
*/
async function helloWorld() {
 await speak("Hello World!", true);
 setMainLed({ r: 202, g: 29, b: 79});
 setSpeed(60);
 await delay (2);
 setSpeed(0);
}


/**
 * ninetyDegree function goes forward for a specified amount of time and speed
 * pausing, turning 90 degrees clockwise then moving forward for a specific amount
 * of speed and time
*/
async function ninetyDegree() {
	await roll((getHeading() + 0), 600, 1.25); // Heading 0 degrees at 600 speed for 1.25 seconds
	await delay(1);
	await roll((getHeading() + 270), 300, 2); // heading 90 degrees at 300 speed for 2 seconds
}


/**
 * startProgram function sends the program to your Sphero Bolt
*/
async function startProgram() {
	await ninetyDegree() // This is calling the ninetyDegree function so that it will run
	await helloWorld() // This is calling the helloWorld function so that it will run
}


// End :D

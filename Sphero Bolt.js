// Programmer: Ranen Allishaw
// Date: 02.06.2023
// Project: Sphero Bolt Testing
// Version: 1.1
// Bolt: 183F


// Hello World Program
async function helloWorld() {
 await speak("Hello", true);
 setMainLed({ r: 202, g: 29, b: 79});
 setSpeed(60);
 await delay (2);
 setSpeed(0);
}


/**
 * ninetyDegree function goes forward for a specified amount of time and speed
 * pausing, turning 90degrees clockwise then moving forward for a specific amount
 * of speed and time
*/
async function ninetyDegree() {
	await roll((getHeading() + 0), 600, 2); // Heading 0 degrees at 60 speed for 4 seconds
	await delay(1);
	await roll((getHeading() + 270), 300, 2); // heading 90 degrees at 60 speed for 4 seconds
}


/**
 * startProgram function sends the program to your Sphero Bolt
*/
async function startProgram() {
	await ninetyDegree() // This is calling the ninetyDegree function so that it will run
	await helloWorld()
}

// End :D

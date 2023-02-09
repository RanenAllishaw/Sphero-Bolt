// Programmer: Ranen Allishaw
// Date: 02.06.2023
// Project: Sphero Bolt Testing
// Version: 1.3
// Bolt: 183F


/**
 * Hello World Practice Program
 * LED turns to Maroon
 * Forward fo 2 seconds at 60 speed
*/
async function elloMmmmmmoto() {
 await speak("Ello,,,,,,                                   MMMMMMoto!", true);
}


/**
 * ninetyDegree function goes forward for a specified amount of time and speed
 * pausing, turning 90 degrees clockwise then moving forward for a specific amount
 * of speed and time
*/
async function ninetyDegree() {
	await roll((getHeading() + 0), 600, 1.25); // Heading 0 degrees at 600 speed for 1.25 seconds
	await delay(1);
	await roll((getHeading() + 95), 900, 4); // heading 90 degrees at 300 speed for 2 seconds
}


/**
 * startProgram function sends the program to your Sphero Bolt
*/
async function startProgram() {
	setMainLed({ r: 40, g: 5, b: 5});
	await Sound.Animal.Monkey.play(true)
	await ninetyDegree() // This is calling the ninetyDegree function so that it will run
	await elloMmmmmmoto() // This is calling the helloWorld function so that it will run
}


// End :D

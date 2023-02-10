// Programmer: Ranen Allishaw
// Date: 02.06.2023
// Project: Sphero Bolt Testing
// Version: 1.5
// Bolt: 183F
5

/**
 * Says Ello Moto
*/
async function elloMmmmmmoto() {
 await speak("Ello,,,,,,                                   MMMMMMoto!", true);
}


/**
 * Roomrun function goes forward for a specified amount of time and speed
 * pausing, turning 90 degrees clockwise then moving forward for a specific amount
 * of speed and time
*/
async function Roomrun() {
	await roll((getHeading() + 0), 600, 1.25); // Heading 0 degrees at 600 speed for 1.25 seconds
	await delay(1);
	await roll((getHeading() + 90), 900, 3.5); // Heading 90 degrees at 900 speed for 3.5 seconds
	await delay(1);
	await roll((getHeading() + 92.5), 900, 1.65); // Heading 90 degrees at 900 speed for 1.65 seconds
	await delay(1);
	await roll((getHeading() + 90), 900, 6.05); // Heading 90 degrees at 900 speed for 6.05 sconds
	await delay(1);
	await roll((getHeading() + 90), 900, 4.2);// Heading 90 degrees at 900 speed for 4.2 seconds
	await delay(1);
	await roll((getHeading() + 90), 900, 2.8);// Heading 90 degrees at 900 speed for 2.8 seconds
	await delay(1);
	await roll((getHeading() + 90), 900, 1.5);// Heading 90 degrees at 900 speed for 1.5 seconds
	await delay(1);
	await roll((getHeading() + 270), 900, 3.2);// Heading 90 degrees at 900 speed for 3.2 seconds

}


/**
 * startProgram function sends the program to your Sphero Bolt
*/
async function startProgram() {
	setMainLed({ r: 40, g: 0, b: 255});
	await Sound.Animal.play(true)
	await Roomrun() // This is calling the ninetyDegree function so that it will run
	await elloMmmmmmoto() // This is calling the helloWorld function so that it will run
}


// End :D

/*
Programming Team: Ranen Allishaw & Kyle Rocco
Date: FEB.15.2023
Project: Labyrinth Competition
Version: 7.2
Bolt: 183F
*/


/**
 * CheckpointBLUE will have START scroll across the LED
 * Then it will roll at 0 degrees at 30 speed for 2 seconds
 * Rotate 90 CW
 * Finally it will have the LED turn BLUE
*/
async function CheckpointBLUE() {
  await scrollMatrixText('START', { r: 255, g: 255, b: 255 }, 30, true);
  await roll(0, 78, 2);
  await spin(90, 2.5);
  setMainLed({ r: 0, g: 0, b: 255 })
}


/**
 *
*/
async function CheckpointNoise_1(){
  await roll(90, 68, 1.5);
  await delay(2);
  await roll(180, 66.25, 1);
  await spin(42.5, 2.5);
  await Sound.Animal.play();
}


/**
 *
*/
async function CheckpointRED() {
    await roll(217.5, 56.1, 1.5);
    await delay(2);
    await roll(132.5, 40.75, 1.1);
    setMainLed({ r: 255, g: 0, b: 0})
    await delay(2);
}


/**
 *
*/
async function CheckpointNoise_2() {
    await roll(42.5, 55.75, 1.5);
    await delay(1.5);
    await roll(130, 35.75, 1.75);
    await Sound.Animal.play();
}


/**
 *
*/
async function CheckpointGREEN() {
    await delay(1.5);
    await roll(180, 43.5, 1);
    await delay(1.5);
    setMainLed({ r: 0, g: 255, b: 0})
    await roll(89.5, 29 , 1.1);

}


/**
 *
*/
async function CheckpointNoise_3() {
    await roll(89.5, 40, 1.1);
    await delay(2);
    await roll(0, 45, 1.5);
    await delay(2);
    await roll(315, 46, 1.25);
    await Sound.Animal.play();
    await delay(2);
}


/**
 *
*/
async function CheckpointPURPLE() {
	await roll(0, 60, 1.5);
	setMainLed({ r: 40, g: 0, b: 255})
	await delay(2);
	await scrollMatrixText('FINISH', { r: 255, g: 255, b: 255 }, 30, true);
}


/**
 *
*/
async function startProgram() {
    await CheckpointBLUE(); // Calls CheckpointBLUE
    await CheckpointNoise_1();
    await CheckpointRED();
    await CheckpointNoise_2();
    await CheckpointGREEN();
    await CheckpointNoise_3();
	await CheckpointPURPLE();
}

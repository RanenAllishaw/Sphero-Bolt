/*
Programming Team: Ranen Allishaw & Kyle Rocco
Date: FEB.13.2023
Project: Labyrinth Competition
Version: 1.3
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
  await roll(0, 77.5, 2);
  await spin(90, 1);
  setMainLed({ r: 0, g: 0, b: 255 })
}

async function startProgram() {
await CheckpointBLUE(); // Calls CheckpointBLUE
}

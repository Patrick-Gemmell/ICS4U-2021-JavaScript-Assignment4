// Created By: Patrick Gemmell
// Created On: May 2021
// This program allows the user to enter in the sides of a triangle and the
//   program will tell the user certain properties of the triangle.
/**
 * This function is for throw.
 * @param {String} message
 */
function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}
// Importing the triangle class from another file
const Triangle = require('./triangle.js');

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});
let userTriangle;
try {
  // User input for the first side length
  const firstSideLength = prompt('Enter the first side length (this will be ' +
                                 'considered the base of the triangle) (CM): ');

  // User input for the second side length
  const secondSideLength = prompt('Enter the second side length (CM): ');

  // User input for the third side length
  const thirdSideLength = prompt('Enter the third side length (CM): ');

  // Ensuring the values passed in are numbers
  const userInput1 = parseFloat(firstSideLength, 10);
  const userInput2 = parseFloat(secondSideLength, 10);
  const userInput3 = parseFloat(thirdSideLength, 10);

  // Ensuring that the triangle can be initialized
  if (isNaN(userInput1) == true || isNaN(userInput2) == true ||
      isNaN(userInput3) == true) {
    // Throwing that one or more of the inputs was invalid
    throw new UserException('ERROR: Invalid Input');
  } else {
    // Initializing the triangle
    userTriangle = new Triangle(userInput1, userInput2, userInput3);
  }

  // Telling the user the kind of triangle they created
  console.log('');
  console.log('Type of Triangle: ' + userTriangle.getName());

  // Telling the user the side length measurements of the triangle
  console.log('Side Length Measurements: ' + userTriangle.getSideLengths());

  // Telling the user the angle measurements of the triangle
  console.log('Angle Measurements: ' + userTriangle.getAngles());

  // Telling the user the height of the triangle
  console.log('Height: ' + userTriangle.getHeight() + ' CM');

  // Telling the user the semiperimeter of the triangle
  console.log('Semiperimeter: ' + userTriangle.getSemiperimeter() + ' CM');

  // Telling the user the perimeter of the triangle
  console.log('Perimeter: ' + userTriangle.getPerimeter() + ' CM');

  // Telling the user the area of the triangle
  console.log('Area: ' + userTriangle.getArea() + ' CM^2');

  // Telling the user the radius of the incircle of the triangle
  console.log('Incircle Radius: ' + userTriangle.getIncircleRadius() + ' CM');

  // Telling the user the area of the circumcircle of the triangle
  console.log('Circumcircle Area: ' + userTriangle.getCircumcircle() + ' CM^2');

  // Catches and tells the user what error occured
} catch (err) {
  console.log('');
  console.error(err);
}

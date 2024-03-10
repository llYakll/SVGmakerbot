const fs = require('fs');
const readline = require('readline');

// Define shape functions
const shapes = {
  circle: (color) => `<circle cx="150" cy="100" r="80" fill="${color}" />`,
  triangle: (color) => `<polygon points="150,20 220,180 80,180" fill="${color}" />`,
  square: (color) => `<rect x="50" y="50" width="200" height="100" fill="${color}" />`
};

// Function to generate SVG file
function generateSVG(text, textColor, shape, shapeColor) {
  // Validate shape
  if (!(shape in shapes)) {
    console.error('Invalid shape provided');
    return;
  }

  // Define SVG content based on user input
  let svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  svgContent += shapes[shape](shapeColor);
  svgContent += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`;
  svgContent += `</svg>`;

  // Specify the file path where the SVG file will be saved
  const filePath = './examples/logo.svg'; // Replace with the desired file path

  // Write SVG content to file
  fs.writeFile(filePath, svgContent, err => {// file/data/[option]/callback https://nodejs.org/api/fs.html
    if (err) {
      console.error('Error writing SVG file:', err);
    } else {
      console.log(`Generated ${filePath}`); // Log the file path where the SVG file is saved
    }
  });
}

// Function to prompt user for input using command line
function promptUser() {
  const rl = readline.createInterface({// https://www.w3schools.com/nodejs/ref_readline.asp and https://nodejs.org/api/readline.html
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter up to three characters: ', text => {
    rl.question('Enter text color (keyword or hexadecimal): ', textColor => {
      rl.question('Choose a shape (circle, triangle, square): ', shape => {
        rl.question('Enter shape color (keyword or hexadecimal): ', shapeColor => {
          // Generate SVG file using user input
          generateSVG(text, textColor, shape, shapeColor);

          // Close the readline interface
          rl.close();
        });
      });
    });
  });
}

// Execute promptUser function to start prompting user for input
promptUser();
// Define the Triangle class which inherits from Shape
class Triangle extends Shape {
    // Render method for Triangle shape
    render() {
        const { color } = this;
        // Return SVG markup representing a triangle with the current color
        return `<polygon points="150,20 220,180 80,180" fill="${color}" />`;
    }
}

// Define the Circle class which inherits from Shape
class Circle extends Shape {
    // Render method for Circle shape
    render() {
        const { color } = this;
        // Return SVG markup representing a circle with the current color
        return `<circle cx="150" cy="100" r="80" fill="${color}" />`;
    }
}

// Define the Square class which inherits from Shape
class Square extends Shape {
    // Render method for Square shape
    render() {
        const { color } = this;
        // Return SVG markup representing a square with the current color
        return `<rect x="50" y="50" width="200" height="100" fill="${color}" />`;
    }
}

// Export shape classes
module.exports = { Triangle, Circle, Square };
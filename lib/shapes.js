// Define the Triangle class
class Triangle {
    // Constructor
    constructor() {
        this.color = '';
    }
    // Set color 
    setColor(color) {
        this.color = color;
    }
    // Render triangle shape
    render() {
        return `<polygon points="150,20 220,180 80,180" fill="${this.color}" />`;
    }
}
// Define the Circle class
class Circle {
    
    constructor() {
        this.color = '';
    }
    
    setColor(color) {
        this.color = color;
    }
    // Render circle shape
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}
// Define the Square class
class Square {
    
    constructor() {
        this.color = '';
    }
    
    setColor(color) {
        this.color = color;
    }
    // Render Square shape
    render() {
        return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
}
// Export shape classes
module.exports = { Triangle, Circle, Square };


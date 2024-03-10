const { Triangle, Circle, Square } = require('./shapes');

// Test suite for the shape classes
describe('Shape classes', () => {
    let triangle, circle, square;

    // Set up before each test case
    beforeEach(() => {
        // Create instances of each shape class
        triangle = new Triangle();
        circle = new Circle();
        square = new Square();
    });

    // Test case for the Triangle class
    test('Triangle should render correctly', () => {
        // Set the color of the triangle and check if the rendered SVG contains the expected markup
        triangle.setColor('red');
        expect(triangle.render()).toContain('<polygon points="150,20 220,180 80,180" fill="red" />');
    });

    // Test case for the Circle class
    test('Circle should render correctly', () => {
        // Set the color of the circle and check if the rendered SVG contains the expected markup
        circle.setColor('blue');
        expect(circle.render()).toContain('<circle cx="150" cy="100" r="80" fill="blue" />');
    });

    // Test case for the Square class
    test('Square should render correctly', () => {
        // Set the color of the square and check if the rendered SVG contains the expected markup
        square.setColor('green');
        expect(square.render()).toContain('<rect x="50" y="50" width="200" height="100" fill="green" />');
    });
});
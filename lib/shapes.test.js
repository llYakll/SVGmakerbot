const { Triangle, Circle, Square } = require('./shapes');

describe('Shape classes', () => {
    let triangle, circle, square;

    beforeEach(() => {
        triangle = new Triangle();
        circle = new Circle();
        square = new Square();
    });

    test('Triangle should render correctly', () => {
        triangle.setColor('red');
        expect(triangle.render()).toContain('<polygon points="150,18 244,182 56,182" fill="red" />');
    });

    test('Circle should render correctly', () => {
        circle.setColor('blue');
        expect(circle.render()).toContain('<circle cx="150" cy="100" r="80" fill="blue" />');
    });

    test('Square should render correctly', () => {
        square.setColor('green');
        expect(square.render()).toContain('<rect x="50" y="50" width="200" height="100" fill="green" />');
    });
});
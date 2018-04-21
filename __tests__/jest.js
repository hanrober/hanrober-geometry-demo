// Require the geometry class
const geometryModule = require("../dist/index.js")

// Instantiate the class
let geometry = new geometryModule()

// Do calculations for "Square"
geometry.name = "Square"
let square = geometry.calc(3)

// Do calculations for "Rectangle"
geometry.name = "Rectangle"
let rectangle = geometry.calc(3, 4)

// Do calculations for "Circle"
geometry.name = "Circle"
let circle = geometry.calc(5)

// Tests for "Square"
describe('Square', () => {
  test('square.area should return a value of 9.00', () => {
    expect(square.area).toBe("9.00");
  })
  test('square.Circumference should return a value of 12.00', () => {
    expect(square.circumference).toBe("12.00");
  })
});

// Tests for "Rectangle"
describe('Rectangle', () => {
  test('rectangle.area should return a value of 12.00', () => {
    expect(rectangle.area).toBe("12.00");
  })
  test('rectangle.circumference should return a value of 14.00', () => {
    expect(rectangle.circumference).toBe("14.00");
  })
});

// Tests for "Circle"
describe('Circle', () => {
  test('circle.area should return a value of 78.54', () => {
    expect(circle.area).toBe("78.54");
  })
  test('circle.circumference should return a value of 31.42', () => {
    expect(circle.circumference).toBe("31.42");
  })
});

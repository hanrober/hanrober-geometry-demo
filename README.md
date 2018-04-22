# Description
A simple class representing a geometry calculation service.
The call of the calculation method will return an object containing the name of the geometric object which
was used for the calculation, the calculated area and circumference and an error message, if an error occured.

# Installation

```
npm install hanrober-geometry-demo --save
```

# Usage

```
import Geometry from 'hanrober-geometry-demo';

/*
 * The following function acts as a demo - Use your own implementation
 */
const demoFunc = (name, ...numbers) => {
  geometry.name = name;
  let result = geometry.calc(...numbers);
  let res = `
     The result of the calculation:
       Object: ${name}
       Area: ${result.area}
       Circumference: ${result.circumference}
       Error: ${result.error}
`;
  geometry.log(res);
};

// Instantiate the class
let geometry = new Geometry()

// Call the calculation method
demoFunc("Square", 3)
```
results in the following console.log output
```
The result of the calculation:
  Object: Square
  Area: 9.00
  Circumference: 12.00
  Error: null
```

An invalid call like
```
.
.
.
demoFunc("Circle", 'drei');
```
results in the following console.log output
```
The result of the calculation:
  Object: Circle
  Area: null
  Circumference: null
  Error: No valid radius for the circle calculation handed over
```

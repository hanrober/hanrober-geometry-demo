# Installation

```
npm install hanrober-geometry-demo --save
```

# Usage

```
const geometryModule = require("hanrober-geometry-demo")

const calc = (name, ...numbers) => {
  geometry.name = name
  result = geometry.calc(...numbers)
  if (result.error != null) {
    geometry.log(result.error)
  } else {
    var res = `
The result of the "${name}" calculations:
  Area: ${result.area}
  Circumference: ${result.circumference}
`
    geometry.log(res)
  }
};

let geometry = new geometryModule()
calc("Square", 3)
calc("Rectangle", 3, 4)
calc("Circle", 5)
```

"use strict";

/** Class representing a geometry calculation service. */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Geometry = function () {
  /**
   * Prepare the service by setting the initial geometryName name variable.
   * This variable indicates, which geometrical object should be used for calculations.
   * @param {string} geometryName - The initial geometryNamee to be used
   */
  function Geometry() {
    var geometryName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Square";

    _classCallCheck(this, Geometry);

    console.log(geometryName);

    // The possible and allowed values for the geometryName variable.
    this._allowedNames = ["Rectangle", "Square", "Circle"];

    // The fallback name, if an invalid one has been specified.
    this._fallback = "Square";

    // Reset the global variables containing the area, circumference and error message.
    this.resetValues();

    // Set the geometryName by calling the setter method.
    this.name = geometryName;
  }

  /**
   * Logs an object to the console.
   * @param {Object} obj - The msg to be logged to the console
   */


  _createClass(Geometry, [{
    key: "log",
    value: function log(obj) {
      console.log(obj);
    }

    /**
     * Get the value of geometryName.
     * @return {string} The geometryName value.
     */

  }, {
    key: "calc",


    /**
     * Calculates the area and the circumference with the handed over values for the
     * geometric object represented by the geometryName variable.
     * The spread operator is used to be flexible for future purposes.
     * @param {array} numbers - The array containg the handed over numbers
     * @return {Object} The object with the geometryName, the calculated area and cirfumference and an error message
     */
    value: function calc() {
      for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
      }

      // Store the handed over params globally
      this._numbers = numbers;
      // Reset the area, circumference and error value
      this.resetValues();
      // Check, which calculation must be execute
      switch (this.name) {
        case "Square":
          this.square();
          break;
        case "Rectangle":
          this.rectangle();
          break;
        case "Circle":
          this.circle();
          break;
      }
      // The object to be returned consists of four entries, namely the name of the
      // geometrical object, the calculated area and circumference values and the error message.
      return {
        geometry: this.name,
        area: this._area,
        circumference: this._circumference,
        error: this._error
      };
    }

    /**
     * Calculates the area and the circumference for a square.
     * If invalid parameters are handed over, no calculations will be done and an
     * error message will be set instead.
     */

  }, {
    key: "square",
    value: function square() {
      if (this._numbers.length && !isNaN(this._numbers[0])) {
        var sideLength = this._numbers[0];
        this._area = Math.pow(sideLength, 2).toFixed(2);
        this._circumference = (4 * sideLength).toFixed(2);
      } else {
        this._error = "No valid side length for the square calculation handed over";
      }
    }

    /**
     * Calculates the area and the circumference for a rectangle.
     * If invalid parameters are handed over, no calculations will be done and an
     * error message will be set instead.
     */

  }, {
    key: "rectangle",
    value: function rectangle() {
      if (this._numbers.length && !isNaN(this._numbers[0]) && !isNaN(this._numbers[1])) {
        var sideA = this._numbers[0];
        var sideB = this._numbers[1];
        this._area = (sideA * sideB).toFixed(2);
        this._circumference = (2 * sideA + 2 * sideB).toFixed(2);
      } else {
        this._error = "No valid side lengths for the rectangle calculation handed over";
      }
    }

    /**
     * Calculates the area and the circumference for a circle.
     * If invalid parameters are handed over, no calculations will be done and an
     * error message will be set instead.
     */

  }, {
    key: "circle",
    value: function circle() {
      if (this._numbers.length && !isNaN(this._numbers[0])) {
        var radius = this._numbers[0];
        this._area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
        this._circumference = (2 * Math.PI * radius).toFixed(2);
      } else {
        this._error = "No valid radius for the circle calculation handed over";
      }
    }

    /**
     * Reset the global variables area, circumference and the error message to null.
     */

  }, {
    key: "resetValues",
    value: function resetValues() {
      this._area = null;
      this._circumference = null;
      this._error = null;
    }
  }, {
    key: "name",
    get: function get() {
      return this._geometryName;
    }

    /**
     * Set the value for geometryName.
     * If the handed over value is not an allowed one, we use the fallback as defined in the constructor.
     * @param {string} newName - The name to be used for setting the geometryName variable
     */
    ,
    set: function set(newGeometryName) {
      if (this._allowedNames.includes(newGeometryName)) {
        this._geometryName = newGeometryName;
      } else {
        this._geometryName = this._fallback;
        var hint = "The name " + newGeometryName + " is not an allowed one and will not be used!";
        this.log(hint);
      }
    }
  }]);

  return Geometry;
}();

/** The name of the module */


module.exports = Geometry;
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
var Home_1 = require("./Home");
var House = /** @class */ (function (_super) {
    __extends(House, _super);
    function House(myWindow, myDoor, myFloor) {
        var _this = _super.call(this, myWindow, myDoor) || this;
        _this.floor = myFloor;
        return _this;
    }
    House.prototype.andares = function () {
        console.log("The home has ".concat(this.floor, " floor"));
    };
    return House;
}(Home_1.Home));
exports.House = House;

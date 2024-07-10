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
exports.Apartament = void 0;
var House_1 = require("./House");
var Apartament = /** @class */ (function (_super) {
    __extends(Apartament, _super);
    function Apartament(myWindow, myDoor, myFloor, myElevator) {
        var _this = _super.call(this, myWindow, myDoor, myFloor) || this;
        _this.elevator = myElevator;
        return _this;
    }
    Apartament.prototype.lift = function () {
        console.log("The apartament is so high that needs use an elevator");
    };
    return Apartament;
}(House_1.House));
exports.Apartament = Apartament;

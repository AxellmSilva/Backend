"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
var Home = /** @class */ (function () {
    function Home(myWindow, myDoor) {
        this.janela = myWindow;
        this.porta = myDoor;
    }
    Home.prototype.protegeDaChuva = function () {
        console.log("The home procted us from rain");
    };
    return Home;
}());
exports.Home = Home;

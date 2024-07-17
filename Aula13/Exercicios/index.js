"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pizza_1 = require("./Pizza");
var pizzaria_1 = require("./pizzaria");
var pizza1 = new Pizza_1.Pizza(pizzaria_1.SaborPizza.Sabor1, 80, "grande");
console.log(pizza1.Descricao());

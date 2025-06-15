// Declaraciones
// var se puede redeclara y puede tener errores, por eso casi no se usa
var nombreDeLaVariable = "Pedro";

var nombreDeLaVariable // var permite declarar sin valor
// let y const no se pueden redeclarar
let nombreDeLaVariable2  // let permite declarar sin valor
const nombreDeLaVariable3 = "Valor de la variable 3"; // const no permite declarar sin valor
// Scope
//var = funcion
//let = bloque
//const = bloque
nombreDeLaVariable3 = "Pedro";
nombreDeLaVariable3 = "Ricardo";
nombreDeLaVariable3 = "Lucia";
nombreDeLaVariable3 = "Mel";
// declarar variables al mismo tiempo
let x,y,z,a;
x = 10;
y = 20;
z = 30;
a = x+y+z;
// el ; tambien se puede usar de la siguiente  manera
x=5;y=10;z=15;
// tener cuidado porque ambos van a apuntar al mismo espacio de memoria
let b = 5;

let c = b


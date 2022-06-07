var Keys;
(function (Keys) {
    Keys[Keys["UP"] = 0] = "UP";
    Keys[Keys["DOWN"] = 1] = "DOWN";
    Keys[Keys["LEFT"] = 2] = "LEFT";
    Keys[Keys["RIGHT"] = 3] = "RIGHT";
})(Keys || (Keys = {}));
var keyPressed;
keyPressed = Keys.LEFT;
var _resp1 = 1 /* RespuestaTest.FALSE */;
var _resp2 = 0 /* RespuestaTest.TRUE */;
// Tuplas
// Un array tiene un número indeterminado de elementos
// Una tupla no, tien un número concreto de elementos
var tup = [1];
var tup2 = [5, "cinco"];
console.log(tup);
console.log(tup2);
//const [state, setState] = useState('')

// Paso 1: Solicitar la temperatura en grados Celsius al usuario
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));

// Función para verificar si la entrada es un número
function esNumero(valor) {
    return !isNaN(valor);
}

// Paso 2: Verificar si la entrada es un número
while (!esNumero(celsius)) {
    alert("Por favor, ingrese un número válido.");
    celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
}

// Paso 3: Convertir Celsius a Fahrenheit
let fahrenheit = celsius * 9/5 + 32;

// Paso 4: Convertir Celsius a Kelvin
let kelvin = celsius + 273.15;

// Paso 5: Imprimir los resultados
console.log("Grados Fahrenheit:", fahrenheit.toFixed(2));
console.log("Grados Kelvin:", kelvin.toFixed(2));

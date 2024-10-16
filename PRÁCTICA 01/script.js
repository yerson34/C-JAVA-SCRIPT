// 1. Ejercicio 1: Pedir al usuario dos números y determinar si el producto es mayor a 100
const num1 = parseFloat(prompt("Ingresa el primer número:"));
const num2 = parseFloat(prompt("Ingresa el segundo número:"));
const resultado = num1 * num2;
resultado > 100 ? console.log("El resultado es mayor a 100") : console.log("El resultado no es mayor a 100");

// 2. Ejercicio 2: Pedir al usuario una contraseña y verificar si es correcta
const contrasena = prompt("Ingresa la contraseña:");
contrasena === "password123" ? console.log("Contraseña correcta") : console.log("Contraseña incorrecta");

// 3. Ejercicio 3: Pedir al usuario un número y determinar si es un número primo
const numero = parseInt(prompt("Ingresa un número:"));
const esPrimo = numero > 1 && Array.from({ length: numero - 2 }, (_, i) => i + 2).every(n => numero % n !== 0);
esPrimo ? console.log("El número es primo") : console.log("El número no es primo");

console.log('Hola mundo')

const bonafont = 'Water'
console.log(bonafont)

// CONDICIONALES
/**
 * Son las opciones que tiene el programa para ejecutarse, dependiendo de una expresión.
 * 
 */

// Lo que esta dentro del parentesis se conoce como expresión
// La expresión evalua si lo que está dentro es verdadero o es falso
// y apartir de esto ejecuta o no lo que hay dentro

// True
if (1 < 2) {
    console.log('Si, 1 es menor que 2')
}

// False
if (1 > 2) {
    console.log('Esto nunca se ejecuta')
}

// A este igual se le conoce como asignación
const teacher = 'Mike'

// A este igual se le conoce como comparación
if (teacher === 'Mike') {
    console.log('My theacher is Mike')
} else {
    console.log('My teacher is not Mike')
}

// Condicional de horarios
/**
 * Construir un bloque de código que verifique la hora en una variable y
 */

let hora = 0;

if (hora >= 0 && hora <= 1159) {
    console.log('Buenos días')
} else if (hora >= 1200 && hora <= 1759) {
    console.log('Buenos tardes')
} else if (hora >= 1800 && hora <= 2359) {
    console.log('Buenos noches')
} else {
    console.log('Inserte una hora valida')
};
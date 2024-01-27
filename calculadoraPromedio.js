// Ingresar el nombre
let nombre = prompt('Nombre: ');
// Ingresar la materia
let materia = prompt('Materia: ');
// Ingresar notas

let nota1 = parseFloat(prompt('Nota Nro. 1'));
while (nota1 < 0 || nota1 > 10 || isNaN(nota1)) {
	alert('ERROR: entre 0 y 10');
	nota1 = parseFloat(prompt('Nota Nro. 1'));
}

let nota2 = parseFloat(prompt('Nota Nro. 2'));
while (nota2 < 0 || nota2 > 10) {
	alert('ERROR: entre 0 y 10');
	nota2 = parseFloat(prompt('Nota Nro. 2'));
}
let nota3 = parseFloat(prompt('Nota Nro. 3'));
while (nota3 < 0 || nota3 > 10) {
	alert('ERROR: entre 0 y 10');
	nota3 = parseFloat(prompt('Nota Nro. 3'));
}
// Agregar controles para que las notas se encuentren entre 0 y 10
// Calcular promedio
let promedio = (nota1 + nota2 + nota3) / 3;
// Evaluar si el promodio es mayor o igual a 7
// Si promedio >= 7
//       Imprimir 'Nombre del alumno, ¡felicidades! Has aprobado con un promedio de [indicar promedio].'
// Caso contrario
//       'Nombre del alumno, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es [indicar promedio].'
if (promedio >= 7) {
	alert(
		`${nombre} ¡felicidades! Has aprobado con un promedio de ${promedio}`
	);
} else {
	alert(
		`${nombre}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ${promedio}`
	);
}

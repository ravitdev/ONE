/*
Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/

function calcularIMC(altura, peso){
    return peso/(altura*altura);
}

function calcularFactorial(numero){
    if (numero == 1 || numero == 0) return numero;
    else return numero * calcularFactorial(numero-1);
}

function convertirDolaresAReales(dolares){
    let cotizacionDolar = 4.8;
    return dolares * cotizacionDolar;
}

function mostrarAreaYPerimetroRectangular(altura, anchura){
    let area = altura * anchura;
    let perimetro = 2 * (altura + anchura);
    return "El área es: " + area + " y el perímetro es: " + perimetro;
}

function mostrarAreaYPerimetroCircular(radio){
    let pi = 3.14;
    let area = radio*(pi*pi);
    let perimetro = 2*radio*pi;
    return "El área es: " + area + " y el perímetro es: " + perimetro;
}

function mostrarTablaDeMultiplicar(numero){
    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}
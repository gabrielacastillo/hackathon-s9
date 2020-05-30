/*
Queremos programar un juego de dados en una página web.

El usuario empieza con 5 soles , para poder apostar.
El usuario decide a que número apuesta del 1 al 6, y también que cantidad de soles quiere apostar.

Se "lanza" un dado (asignación al azar de un número del a 1 a 6)

Si el usuario acierta el número, gana el doble de lo que ha postado. Si no acierta, pierde todo lo apostado.

El juego acaba cuando el usuario llega a 0 soles o a llegar a 200 soles.
*/

let dineroActual = 5;

function iniciarjuegoDados(){
    console.log("bienvenido a Gabriela's Game :D");
    console.log("-------------------------------");

    console.log("Tienes 5 Soles de dinero inicial buena suerte...");
    
    let prediccion;
    let apuesta;
    let valorDado;

    do{
        do{
            prediccion = parseInt(prompt("Ingresa un numero valido de prediccion (1-6): "));
        }while(prediccion < 1 || prediccion > 6)
    
        do{
            apuesta = parseInt(prompt("Ingresa un valor de apuesta valido: "));
        }while(apuesta > dineroActual)

        valorDado = lanzarDado();

        if(prediccion == valorDado){
            dineroActual += (apuesta*2);
            console.log("Felicidades has Acertado");
            console.log("Has ganado: "+(apuesta*2));
            console.log("dinero actual: "+(dineroActual));
        }else{
            dineroActual -= apuesta;
            console.log("No has Acertado");
            console.log("Dinero perdido: "+apuesta);
            console.log("dinero actual: "+(dineroActual));
        }
    }while(dineroActual > 0 && dineroActual<200)

    console.log("gracias por visitar Gabriela's Game :D");
    console.log("--------------------------------------");
}

function lanzarDado(){
    return getRndInteger(1, 6);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

iniciarjuegoDados();

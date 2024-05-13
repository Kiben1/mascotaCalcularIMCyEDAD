/* funcion resolver masa corporal */
function masaCorporal(){
    let m=parseFloat(document.getElementById("n1").value);
    let a=parseFloat(document.getElementById("n2").value);
    let imc=m/(a*a);
    if (imc < 18.5) {
        r="Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
        r="Peso normal";
    } else if (imc >= 25 && imc < 30) {
        r="Sobrepeso";
    } else { 
        r="Obesidad";
    }
    document.getElementById("res").innerHTML=imc.toFixed(1);
    document.getElementById("r").innerHTML=r;
}
/* funcion resolver su edad */
function edad(){
    let es=document.getElementById("n1").value;
    let ed=parseFloat(document.getElementById("n2").value);
    if (es === "perro"||es==="Perro"||es==="PERRO") {
        // Fórmula para calcular la edad de un perro en años humanos
        if (ed <= 2) {
            r= ed * 10.5;
        } else {
            r= 21 + (ed - 2) * 4;
        }
    } else if (es === "gato"||es==="Gato"||es==="GATO") {

        // Fórmula para calcular la edad de un gato en años humanos
        
    if (ed === 1) {
            r= 15;
        } else if (ed === 2) {
            r= 24;
        } else {
            r=24 + (ed - 2) * 4;
        }
    } else {
        // Otra especie
        r="No se puede calcular la edad para esta especie.";
    }
    document.getElementById("res").innerHTML=r+" años";
}
function edad2(){
    let es=document.getElementById("n1").value;
    let ed=parseFloat(document.getElementById("n2").value);
    if (es === "perro"||es==="Perro"||es==="PERRO") {
        // Fórmula para calcular la edad de un perro en años humanos
        r=ed*7
    } else if (es === "gato"||es==="Gato"||es==="GATO") {

        // Fórmula para calcular la edad de un gato en años humanos
        r=ed*5
    } else {
        // Otra especie
        r="No se puede calcular la edad para esta especie.";
    }
    document.getElementById("res").innerHTML=r+" años";
}
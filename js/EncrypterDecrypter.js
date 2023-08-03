output = document.getElementById("output");
input = document.getElementById("input");

function encriptar(str) {
    str = input.value.toLowerCase();
    if (/^[a-z+\s]+$/g.test(str)) {
        str = str.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    } else {
        str = "¡Su texto contiene caracteres especiales! ¡Por favor, ingrese solo letras sin acentos!";
    }
    output.value = str;
    }

function desencriptar(str) {
    str = input.value.toLowerCase();
    if (/^[a-z+\s]+$/g.test(str)) {
        str = str.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    } else {
        str = "¡Su texto contiene caracteres especiales! ¡Por favor, ingrese solo letras sin acentos!";
    }
    output.value = str;
}

function copiar(str) {
    str = output.value;
    navigator.clipboard.writeText(str);
    output.value = "";
    input.value = str;
}


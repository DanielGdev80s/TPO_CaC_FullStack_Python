var nombre = document.getElementById("nombres");
var correo = document.getElementById("correo");
var celular = document.getElementById("celular");
var error = document.getElementById("error");
error.style.color = "red";






function enviarFormulario(){
    console.log("Enviando formulario...");

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ""){
        mensajesError.push("Ingresa tu nombre");
    }

    if(correo.value === null || correo.value === ""){
        mensajesError.push("Ingresa tu correo");
    }

    if(celular.value === null || celular.value === ""){
        mensajesError.push("Ingresa tu celular");
    }

    error.innerHTML = mensajesError.join(", , ");
    
    return false;
}

function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
  
   // i es para que afecte tanto mayúsculas como minúsculas
   // g es para toda la línea u oración
   // m para que afecte multiples lineas o parrafo
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("imglupa").style.display = "none";
    document.getElementById("textobox").style.display = "none";
    document.getElementById("textobox2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("textobox2").style.display = "show";
    document.getElementById("textobox2").style.display = "inherit";

}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
  
   // i es para que afecte tanto mayúsculas como minúsculas
   // g es para toda la línea u oración
   // m para que afecte multiples lineas o parrafo
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("imglupa").style.display = "none";
    document.getElementById("textobox").style.display = "none";
    document.getElementById("textobox2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("textobox2").style.display = "show";
    document.getElementById("textobox2").style.display = "inherit";


}

function copy(){
    var contenido = document.querySelector("#textobox2");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado!")
}
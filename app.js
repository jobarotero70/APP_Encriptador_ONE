function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let IMG_ESCRIBIR = document.getElementById("IMG_ESCRIBIR");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      IMG_ESCRIBIR.src = "./img/IMG_encriptando.gif";
    } else {
      IMG_ESCRIBIR.src = "./img/IMG_ESCRIBIR.gif";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let IMG_ESCRIBIR = document.getElementById("IMG_ESCRIBIR");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  
            
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito.";
        parrafo.textContent = "";
        IMG_ESCRIBIR.src = "./img/IMG_desencriptado.gif";
      } else {
        IMG_ESCRIBIR.src = "./img/IMG_ESCRIBIR.gif";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado.";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar.";
        swal("ERROR!", "Debes ingresar un texto", "warning");
      }
  }

function cifrarMensaje() {
    
    const mensajeOriginal = document.getElementById("inputText").value;

    // Alfabeto      
    const alfabetoSustitucion = {
        'A': 'Q', 'B': 'P', 'C': 'W', 'D': 'O', 'E': 'E', 'F': 'I', 'G': 'R', 'H': 'U', 'I': 'T',
        'J': 'Y', 'K': 'A', 'L': 'S', 'M': 'D', 'N': 'L', 'O': 'K', 'P': 'J', 'Q': 'H', 'R': 'G',
        'S': 'F', 'T': 'Z', 'U': 'X', 'V': 'C', 'W': 'V', 'X': 'B', 'Y': 'N', 'Z': 'M',
        'a': 'q', 'b': 'p', 'c': 'w', 'd': 'o', 'e': 'e', 'f': 'i', 'g': 'r', 'h': 'u', 'i': 't',
        'j': 'y', 'k': 'a', 'l': 's', 'm': 'd', 'n': 'l', 'o': 'k', 'p': 'j', 'q': 'h', 'r': 'g',
        's': 'f', 't': 'z', 'u': 'x', 'v': 'c', 'w': 'v', 'x': 'b', 'y': 'n', 'z': 'm'
    };

    // Cifrar mensaje
    let mensajeCifrado = "";
    for (let i = 0; i < mensajeOriginal.length; i++) {
        const caracter = mensajeOriginal[i];
        if (alfabetoSustitucion.hasOwnProperty(caracter)) {
            mensajeCifrado += alfabetoSustitucion[caracter];
        } else {
            mensajeCifrado += caracter; 
        }
    }

    // Mostrarmensaje cifrado
    document.getElementById("mensajeCifrado").textContent = mensajeCifrado;
}


function borrarTexto() {
    var cajaDeTexto = document.getElementById("inputText");

    // Borrar
    cajaDeTexto.value = "";
}
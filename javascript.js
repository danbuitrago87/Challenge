// Función para convertir el texto según el criterio dado
function convertirTexto(texto) {
    return texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
}

// Evento de clic para el botón 1
document.getElementById('btn1').addEventListener('click', function() {
    // Obtiene el valor del input
    var inputText = document.getElementById('textInput').value;

    // Convierte el texto usando la función convertirTexto
    var textoConvertido = convertirTexto(inputText);

    // Muestra el texto convertido en la caja derecha
    document.getElementById('outputBox').innerHTML = '<p>' + textoConvertido + '</p>';
});

// Evento de clic para el botón de copiar
document.getElementById('copyButton').addEventListener('click', function() {
    // Crea un campo de texto temporal para seleccionar y copiar el texto
    var tempInput = document.createElement('textarea');
    tempInput.value = document.getElementById('outputBox').textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Texto copiado: ' + tempInput.value);
});

document.getElementById('btn2').addEventListener('click', function(){
     // Obtiene el valor del input
    var inputText = document.getElementById('textInput').value;    
    // Muestra el texto desencriptado en la caja derecha
        document.getElementById('outputBox').innerHTML = '<p>' + inputText + '</p>';
});
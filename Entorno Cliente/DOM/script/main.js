//elementos del DOM
const template = document.getElementById('template');
const inputMensaje = document.getElementById('mensajeInput');
const btnEnviar = document.getElementById('enviar');
const panelMensajes = document.getElementById('mensajes');
const inputFoto = document.getElementById('foto');

btnEnviar.addEventListener('click', () =>{
    if (!inputMensaje.value.trim() == ""){
        const clon = template.content.cloneNode(true);
        const mensaje = clon.querySelector('.mensaje');
        const texto = clon.querySelector('.mensaje > p');
        texto.textContent = inputMensaje.value;        

        panelMensajes.appendChild(mensaje);
        inputMensaje.value = "";
        panelMensajes.scrollTop = panelMensajes.scrollHeight;
    }
});

inputFoto.onchange = () =>{
    for (let i = 0; i < inputFoto.files.length; i++){
        const url = URL.createObjectURL(inputFoto.files[i]);
        const image = document.createElement('img');
        image.src = url;
        panelMensajes.appendChild(image);
        panelMensajes.scrollTop = panelMensajes.scrollHeight;
    }
}



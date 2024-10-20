const $panelTweets2 = document.getElementById('tweets');
const $template2 = document.getElementById('template');

const is_Signed = sessionStorage.getItem('is_Signed');
// sessionStorage.clear();
// localStorage.clear();

if(!is_Signed){
    location.href = 'index.html';
}




const arrayLocal = JSON.parse(localStorage.getItem("tweets"));


if (arrayLocal){
    arrayLocal.reverse();
    for (let i = 0; i < arrayLocal.length; i++){
        const clone = $template2.content.cloneNode(true);
        const $tweet2 = clone.querySelector('.tweet');
        const $mensaje2 = clone.querySelector('.tweet #mensaje');
        const foto2 = clone.getElementById('fotoUser');
        const nombre2 = clone.getElementById('nombre');
        const nombreUsuario2 = clone.getElementById('nombreUsuario');
        const $fotoTweet2 = clone.getElementById('fotoTweet');
        const $fechaEnvio2 = clone.getElementById('fechaEnvio');
    
        $mensaje2.textContent = arrayLocal[i].MENSAJE;
        foto2.src = arrayLocal[i].IMG;
        nombre2.textContent = arrayLocal[i].NOMBRE;
        nombreUsuario2.textContent = arrayLocal[i].NOMBREUSUARIO;        
        $fotoTweet2.src = arrayLocal[i].IMGSUBIDA;
        $fechaEnvio2.textContent = arrayLocal[i].FECHA
    
        $panelTweets2.appendChild($tweet2);
    }
}





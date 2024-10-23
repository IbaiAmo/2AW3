const $panelTweets2 = document.getElementById('tweets');
const $template2 = document.getElementById('template');


// sessionStorage.clear();
// localStorage.clear();


const usuariosArray = JSON.parse(localStorage.getItem("usuarios"));
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
        // const $fotoTweet2 = clone.getElementById('fotoTweet');
        const $fechaEnvio2 = clone.getElementById('fechaEnvio');
    
        foto2.src = fotoPerfilUser(arrayLocal[i].NOMBREUSUARIO);
        nombre2.textContent = nombreUser(arrayLocal[i].NOMBREUSUARIO);
        nombreUsuario2.textContent += usernameUser(arrayLocal[i].NOMBREUSUARIO);        
        $mensaje2.textContent = arrayLocal[i].MENSAJE;
        // $fotoTweet2.src = arrayLocal[i].IMGSUBIDA;
        $fechaEnvio2.textContent = arrayLocal[i].FECHA;

        
        $panelTweets2.appendChild($tweet2);
    }
}

function fotoPerfilUser(username){
    for (let x = 0; x < usuariosArray.length; x++) {
        if (usuariosArray[x].usuario == username){
            return usuariosArray[x].fotoPerfil;
        } 
    }
}

function nombreUser(username){
    for (let x = 0; x < usuariosArray.length; x++) {
        if (usuariosArray[x].usuario == username){
            return usuariosArray[x].nombre;
        } 
    }
}

function usernameUser(username){
    for (let x = 0; x < usuariosArray.length; x++) {
        if (usuariosArray[x].usuario == username){
            return usuariosArray[x].usuario;
        } 
    }
}





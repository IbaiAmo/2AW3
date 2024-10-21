const $body2 = document.querySelector('body');
const $panelTweets = document.getElementById('tweets');
const $btnTweet = document.getElementById('btnTweet');
const $template = document.getElementById('template');

const local = JSON.parse(localStorage.getItem("tweets"));
const arrayTweets = Array();

const userLocal = JSON.parse(localStorage.getItem("usuarios"));

if (local){
    for (let i = 0; i < local.length; i++){
        arrayTweets.push(local[i]);
    }
}

const fotoDePerfil = document.getElementById('fotoPerfil');
fotoDePerfil.src = getUserPic();

$btnTweet.onclick = () =>{
    const fondo = document.createElement('div');
    fondo.classList.add('fondoNegro');

    $body2.style.overflowY = "hidden";
    $body2.appendChild(fondo);

    const clon = $template.content.cloneNode(true);
    const $tweetear = clon.getElementById('tweettear');
    const $closeTweet = clon.getElementById('closeTweet');
    // const $fotoInput = clon.getElementById('fotoInput');
    // const $foto = clon.querySelector('.escribir img');
    // const $borrarFoto = clon.getElementById('borrarFotoBtn');
    const $crearTweet = clon.getElementById('crearTweetBtn');
    const textoInput = clon.getElementById('textoInput');

    $body2.appendChild($tweetear);

    $closeTweet.addEventListener('click', () =>{
        $body2.removeChild(fondo);
        $body2.removeChild($tweetear);
        $body2.style.overflowY = "auto";
    });

    // $fotoInput.onchange = (e) =>{
    //     const blob = URL.createObjectURL($fotoInput.files[0]);
    //     $foto.setAttribute("src", blob);
    // }

    // $borrarFoto.addEventListener('click', () =>{
    //     $foto.removeAttribute("src");
    // });

    $crearTweet.onclick = () =>{

        const $tweet = clon.querySelector('.tweet');
        const $mensaje = clon.querySelector('.tweet #mensaje');
        const perfilFoto = clon.getElementById('fotoUser');
        const nombre = clon.getElementById('nombre');
        const nombreUsuario = clon.getElementById('nombreUsuario');
        // const $fotoTweet = clon.getElementById('fotoTweet');
        const $fechaEnvio = clon.getElementById('fechaEnvio');

        const fecha = new Date();
        
        
        if (/*!$foto.hasAttributes() && */textoInput.value.trim() == ""){

        }else{
            $body2.removeChild(fondo);
            $body2.removeChild($tweetear);
            $body2.style.overflowY = "auto";
    
            perfilFoto.src = getUserPic();
            nombre.textContent = getUserName();
            nombreUsuario.textContent += getUserUsername();
            $fechaEnvio.textContent = fecha.getDate() + "-" + (fecha.getMonth()+1) + "-" + fecha.getFullYear();
            $mensaje.textContent = textoInput.value;
            // $fotoTweet.setAttribute("src", $foto.src);
    
            $panelTweets.insertBefore($tweet, $panelTweets.firstChild);
            
            const tweetObj = {
                ID: Math.random() * (99999999 - 0) + 0,
                IMG: getUserPic(),
                NOMBRE: getUserName(),
                NOMBREUSUARIO: getUserUsername(),
                FECHA: $fechaEnvio.textContent,
                MENSAJE: $mensaje.textContent//,
                // IMGSUBIDA: $fotoTweet.attributes[1].value
            }

            
            arrayTweets.push(tweetObj);
            localStorage.setItem("tweets", JSON.stringify(arrayTweets));

            setTweetUser(tweetObj.ID);
        }
    }
}


function getUserPic(){
    for (let x = 0; x < userLocal.length; x++) {
        if (userLocal[x].usuario == sessionStorage.getItem("signedUser")){
            return userLocal[x].fotoPerfil;
        } 
    }
}

function getUserName(){
    for (let x = 0; x < userLocal.length; x++) {
        if (userLocal[x].usuario == sessionStorage.getItem("signedUser")){
            return userLocal[x].nombre;
        } 
    }
}

function getUserUsername(){
    for (let x = 0; x < userLocal.length; x++) {
        if (userLocal[x].usuario == sessionStorage.getItem("signedUser")){
            return userLocal[x].usuario;
        } 
    }
}

function setTweetUser(id){
    for (let x = 0; x < userLocal.length; x++) {
        if (userLocal[x].usuario == sessionStorage.getItem("signedUser")){
            userLocal[x].tweets.push(id);
            break;
        } 
    }

    localStorage.setItem("usuarios", JSON.stringify(userLocal));
}






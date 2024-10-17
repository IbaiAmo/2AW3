const $body2 = document.querySelector('body');
const $panelTweets = document.getElementById('tweets');
const $btnTweet = document.getElementById('btnTweet');
const $template = document.getElementById('template');


$btnTweet.onclick = () =>{
    const fondo = document.createElement('div');
    fondo.classList.add('fondoNegro');

    $body2.style.overflowY = "hidden";
    $body2.appendChild(fondo);

    const clon = $template.content.cloneNode(true);
    const $tweetear = clon.getElementById('tweettear');
    const $closeTweet = clon.getElementById('closeTweet');
    const $panelInputs = clon.querySelector('.escribir');
    const $fotoInput = clon.getElementById('fotoInput');
    const $foto = clon.querySelector('.escribir img');
    const $borrarFoto = clon.getElementById('borrarFotoBtn');

    $body2.appendChild($tweetear);

    $closeTweet.addEventListener('click', () =>{
        $body2.removeChild(fondo);
        $body2.removeChild($tweetear);
    });

    $fotoInput.onchange = (e) =>{
        const blob = URL.createObjectURL($fotoInput.files[0]);
        $foto.src = blob;

        
    }

    $borrarFoto.addEventListener('click', () =>{
        $foto.src = "";
    });

}




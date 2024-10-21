const cerrarSesionBtn = document.getElementById('btnCerrarSesion');



cerrarSesionBtn.onclick = () =>{
    sessionStorage.removeItem('is_Signed');
    sessionStorage.removeItem('signedUser');
    location.reload();
};
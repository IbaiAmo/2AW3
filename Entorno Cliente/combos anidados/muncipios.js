var provincias = new Array("Araba", "Bizkaia", "Gipuzkoa", "Nafarroa", "Lapurdi", "Zuberoa", "Nafarroa Beherea")

var municipios_1 = new Array("Seleccione municipio", "Vitoria-Gasteiz", "Amurrio", "El Ciego", "La Guardia");
var municipios_2 = new Array("Seleccione municipio", "Bilbao", "Barakaldo", "Durango", "Elorrio", "Muzkiz");
var municipios_3 = new Array("Seleccione municipio", "Donostia-San Sebastián", "Arrasate-Mondragón", "Eibar");
var municipios_4 = new Array("Seleccione municipio", "Iruña", "Burlada", "Estella-Lizarra", "Tafalla");
var municipios_5 = new Array("Seleccione municipio", "Baiona", "Bastida", "Hendaya", "Miarritze");
var municipios_6 = new Array("Seleccione municipio", "Maule", "Barkoxe", "Sohüta");
var municipios_7 = new Array("Seleccione municipio", "Baigorri", "Garazi", "Oztibarre");

var todosMunicipios = [
    ["Seleccione municipio"],
    municipios_1,
    municipios_2,
    municipios_3,
    municipios_4,
    municipios_5,
    municipios_6,
    municipios_7,
];


const selectProv = document.getElementById('prov');
const selectMuni = document.getElementById('muni');
const ejercicio = document.querySelector('.ejercicio');
const mensaje = document.createElement('p');
let num = 1, provElegida, muniElegido, mensajeMostrado;

//forEach para rellenar el select de las provincias.
provincias.forEach(provincia =>{
    const option = document.createElement('option');
    option.value = num;
    option.innerHTML = provincia;
    selectProv.appendChild(option);
    num++;
});

selectProv.addEventListener('change', e =>{
    let number = e.target[selectProv.selectedIndex].value;
    provElegida = e.target[selectProv.selectedIndex].textContent;
    selectMuni.innerHTML = "";
    municipios(number);
    
    if(mensajeMostrado){
        ejercicio.removeChild(mensaje);
        mensajeMostrado = false;
    }
});

selectMuni.addEventListener('change', e =>{
    muniElegido = e.target[selectMuni.selectedIndex].textContent;

    if(muniElegido != "Seleccione municipio"){
        ejercicio.appendChild(mensaje);
        mensaje.innerHTML = `Ha seleccionado <span>${muniElegido}</span> en <span>${provElegida}</span>`;
        mensajeMostrado = true;
    }else{
        ejercicio.removeChild(mensaje);
        mensajeMostrado = false;
    }
    
    
});

//Funcion para rellenar el select de los municipios.
function municipios(number){
    for (let i = 0; i < todosMunicipios[number].length; i++){
        const option = document.createElement('option');
        option.value = todosMunicipios[number][i];
        option.innerHTML = todosMunicipios[number][i];
        selectMuni.appendChild(option);
    }
}


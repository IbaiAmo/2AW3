<?php
//Hacer un SELECT
$mysqli = new mysqli("localhost", "root", "", "caballeroscas");
//el error este no aparece
if ($mysqli->connect_errno) {
    echo "Falló la conexión a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$resultado = $mysqli->query("SELECT * FROM caballeros");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css" integrity="sha512-MqL4+Io386IOPMKKyplKII0pVW5e+kb+PI/I3N87G3fHIfrgNNsRpzIXEi+0MQC0sR9xZNqZqCYVcC61fL5+Vg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="icon" href="https://cdn-icons-png.freepik.com/256/5305/5305216.png?semt=ais_hybrid">
    <link rel="stylesheet" href="../css/main.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <title>Caballeros - Inicio</title>
</head>
<body>
    <main>
        <div id="title" data-aos="fade-down">
            <h1>Caballeros</h1>
            <img src="https://e7.pngegg.com/pngimages/745/211/png-clipart-paper-text-frame-brown-pattern-medieval-european-border-background-brown-wooden-f-border-texture-thumbnail.png">
        </div>

        <div class="tableNav">
            <div>
                <input type="text" id="buscador" placeholder="Buscar un caballero">
                <i class="ri-search-line"></i>
            </div>
            <a class="insertar" href="./insertar.html">
                <i class="ri-add-line"></i>
                <p>Crear caballero</p>
            </a>
        </div>    

        <div id="tablaCont" data-aos="zoom-in" data-aos-easing="ease-out" data-aos-delay="300">
        <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Fuerza</th>
                        <th>Activo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        while ($row = $resultado->fetch_assoc()) {
                    ?>
                        <tr>
                            <td><?=$row["id"]?></td>
                            <td><?=$row["nombre"]?></td>
                            <td><?=$row["fuerza"]?></td>
                            <td>
                                <?php
                                    if($row["activo"]){
                                        echo "Sí";
                                    }else{
                                        echo "No";
                                    }
                                ?>
                            </td>
                            <td>
                                <div class="links">
                                    <a href="./verFicha.php?id=<?=$row["id"]?>">ver</a>
                                    <a href="./modificar.php?id=<?=$row["id"]?>">modificar</a>
                                    <a href="./eliminar.php?id=<?=$row["id"]?>">eliminar</a>
                                </div>
                            </td>
                        </tr>
                    <?php
                        }
                        $mysqli->close();
                    ?>
                </tbody>
            </table>
        </div>

        <div id="scroll" data-aos="zoom-in" data-aos-delay="600">
            <h2>Scroll para leer</h2>
            <i class="ri-arrow-down-double-line"></i>
        </div>

        <div id="informacion" data-aos="fade-up">
            <img id="fondoInfo" src="https://img.freepik.com/foto-gratis/fondo-papel-grunge_1048-10791.jpg?t=st=1727176034~exp=1727179634~hmac=159dae414d6d38fa70805f6bb7b2c59d79b0a01d3aa49f15ebab97e2f0fc067e&w=740">
            <h1>La Era Medieval</h1>
            <div>
                <p>La era medieval, un periodo que abarca aproximadamente desde el siglo V hasta el siglo XV, está marcada por una serie de transformaciones sociales, políticas y culturales que dieron forma a Europa. En este contexto, los caballeros emergieron como figuras emblemáticas, simbolizando la nobleza, el honor y la lealtad. Su formación, disciplina y código de conducta, conocido como la caballería, jugaron un papel fundamental en las guerras y conflictos de la época. Los caballeros eran guerreros montados que ofrecían su servicio militar a un señor feudal a cambio de tierras y protección. Este sistema feudal no solo organizó la sociedad, sino que también realizó un impacto significativo en las dinámicas de poder de la época.</p>
                <img src="https://s1.significados.com/foto/edad-media-og.jpg">
            </div>
            <div>
                <p>El ideal del caballero estaba ligado no solo a su habilidad en la lucha, sino también a un conjunto de virtudes que incluían la valentía, la cortesía, la generosidad y la lealtad. La figura del caballero era también un reflejo de la sociedad feudal, donde la jerarquía social dictaba las relaciones entre los diferentes estamentos. Además de participar en combates, los caballeros eran a menudo los encargados de organizar torneos, eventos que servían tanto para la exhibición de sus habilidades como para el entretenimiento de la corte. Estas competiciones fomentaban un sentido de camaradería entre los nobles y fortalecían su reputación ante el pueblo.</p>
                <img src="https://historia.nationalgeographic.com.es/medio/2023/06/06/caballero_fbc89d5f_230606114003_800x612.jpg">
            </div>
            <div>
                <p>Una de las batallas más significativas de la era medieval fue la Batalla de Hastings, librada el 14 de octubre de 1066. Este enfrentamiento marcó la conquista normanda de Inglaterra y tuvo profundas repercusiones en la historia del país. La batalla se libró entre las fuerzas del rey anglosajón Harold II y el duque Guillermo de Normandía, quien buscaba reclamar el trono que consideraba legítimo. A pesar de su inferioridad numérica, las tropas normandas, compuestas en su mayoría por caballeros experimentados, utilizaron tácticas innovadoras que les permitieron derrotar a los anglosajones. Esta victoria no solo consolidó el poder de Guillermo, quien se convirtió en rey, sino que también sentó las bases para un nuevo orden político y social en Inglaterra.</p>
                <img src="https://mihistoriauniversal.com/wp-content/uploads/batalla-de-hastings.jpg">
            </div>
            <div>
                <p>En resumen, la era medieval fue un periodo fascinante donde los caballeros desempeñaron un papel crucial tanto en las batallas como en la configuración de la sociedad. Su participación en confrontaciones decisivas, como la Batalla de Hastings y la Batalla de Crécy, no solo refleja su destreza y valentía, sino también el impacto de su existencia en la historia europea. La figura del caballero trasciende las fronteras del tiempo, convirtiéndose en un símbolo de honor, nobleza y aventura en la tradición occidental, un legado que continúa inspirando hasta nuestros días. La era medieval puede parecer distante, pero el fascino y la intriga que rodean a los caballeros y sus hazañas vivirán eternamente en nuestra cultura.</p>
                <img src="">
            </div>
        </div>
    </main>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init();
        const buscador = document.getElementById('buscador');
        const celdas = document.querySelectorAll('tbody > tr');

        buscador.addEventListener('input', () =>{
            celdas.forEach(celda =>{
                const nombre = celda.childNodes[3].textContent;
                if(!nombre.toLowerCase().includes(buscador.value.toLowerCase())){
                    celda.style.display = "none";
                }else{
                    celda.style.display = "";
                }
                
            });
            
        });
    </script>
</body>
</html>
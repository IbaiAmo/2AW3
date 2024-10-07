<?php
$id = $_GET['id'];
$mysqli = new mysqli("localhost", "root", "", "caballeroscas");
$resultado = $mysqli->query("SELECT * FROM caballeros WHERE id=" . $id);
$row = $resultado->fetch_assoc();
$mysqli->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="https://cdn-icons-png.freepik.com/256/5305/5305216.png?semt=ais_hybrid">
    <link rel="stylesheet" href="../css/ver.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css" integrity="sha512-MqL4+Io386IOPMKKyplKII0pVW5e+kb+PI/I3N87G3fHIfrgNNsRpzIXEi+0MQC0sR9xZNqZqCYVcC61fL5+Vg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title><?=$row['nombre'] . " - ver ficha"?></title>
</head>
<body>
    <div id="atributos">
        <h1>Ficha de caballero</h1>
        <div>
            <p>Nombre: <?=$row['nombre']?></p>
            <p>Fuerza: <?=$row['fuerza']?></p>
            <p>Ataque: <?=$row['ataque']?> <i class="ri-sword-line"></i></p>
            <p>Defensa: <?=$row['defensa']?> <i class="ri-shield-line"></i></p>
            <p>Experiencia: <?=$row['experiencia']?> <i class="ri-test-tube-line"></i></p>
            <p>Fecha de nacimiento: <?=$row['fecha_nacimiento']?></p>
            <p>Activo: 
                <?php
                    if($row['activo']){
                        echo "Sí";
                    }else{
                        echo "No";
                    }
                ?>
            </p>
        </div>
    </div>

    <div id="volver">
        <a href="./index.php">
            <i class="ri-arrow-left-double-line"></i>
            <p>volver</p>
        </a>
    </div>
</body>
</html>
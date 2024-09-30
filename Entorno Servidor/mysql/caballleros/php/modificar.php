<?php
$id = $_GET['id'];
$mysqli = new mysqli("localhost","root", "", "caballeroscas");

$resultado = $mysqli->query("SELECT * FROM caballeros WHERE id=" . $id);
$row = $resultado->fetch_assoc();
$nombre = $row['nombre'];
$fuerza = $row['fuerza'];
$ataque = $row['ataque'];
$defensa = $row['defensa'];
$experiencia = $row['experiencia'];
$fechaNac = $row['fecha_nacimiento'];
$activo = $row['activo'];
$mysqli->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="https://cdn-icons-png.freepik.com/256/5305/5305216.png?semt=ais_hybrid">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css" integrity="sha512-MqL4+Io386IOPMKKyplKII0pVW5e+kb+PI/I3N87G3fHIfrgNNsRpzIXEi+0MQC0sR9xZNqZqCYVcC61fL5+Vg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../css/modificar.css">
    <title><?=$row['nombre']?> - modificar</title>
</head>
<body>
    <form class="formulario" action="./update.php" method="post">
        <h1>Modificar</h1>
        <input type="hidden" name="id" value="<?=$id?>">
        <input type="text" name="nombre" placeholder="Nombre" autocomplete="off" value="<?=$nombre?>">
        <input type="number" name="fuerza" placeholder="Fuerza" autocomplete="off" value="<?=$fuerza?>">
        <input type="number" name="ataque" placeholder="Ataque" autocomplete="off" value="<?=$ataque?>">
        <input type="number" name="defensa" placeholder="Defensa" autocomplete="off" value="<?=$defensa?>">
        <input type="number" name="experiencia" placeholder="Experiencia" autocomplete="off" value="<?=$experiencia?>">
        <input type="date" name="fechaNac" autocomplete="off" value="<?=$fechaNac?>">
        <?php if($activo){?>
            <label class="activo" for="activo" style="color: green;">Activo</label>
            <input type="checkbox" id="activo" name="activo" hidden checked>
        <?php }else{ ?>
            <label class="activo" for="activo" style="color: red;">Inactivo</label>
            <input type="checkbox" id="activo" name="activo" hidden>
        <?php } ?>    

        <div class="submits">
            <input type="submit" name="boton" value="Guardar">
            <input type="submit" name="boton" value="Guardar y salir">
        </div>
    </form>
    
    <div id="volver">
        <a href="./index.php">
            <i class="ri-arrow-left-double-line"></i>
            <p>volver</p>
        </a>
    </div>

    <script>
        const activo = document.querySelector('.activo');

        activo.addEventListener('click', () =>{
            if(activo.textContent == "Activo"){
                activo.textContent = "Inactivo";
                activo.style.color = "red";
            }else{
                activo.textContent = "Activo";
                activo.style.color = "green";
            }
        })
    </script>
</body>
</html>
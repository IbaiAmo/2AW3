<?php
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$edad = $_POST["edad"];
$peso = $_POST["peso"];
if(isset($_POST['sexo'])){
    $sexo = $_POST["sexo"];
}else{
    $sexo="";
}

if(isset($_POST['estado'])){
    $estado = $_POST["estado"];
}else{
    $estado="";
}

if (isset($_POST["aficiones"])){
    $aficiones = $_POST["aficiones"];
}else{
    $aficiones = '';
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css">
    <link rel="icon" href="https://icon-library.com/images/forms-icon-png/forms-icon-png-10.jpg">
    <title>Datos personales</title>

    <style>
        .vacio{
            color: red;
        }
    </style>
</head>
<body>
    <h1>Datos personales</h1>
    <?php
    if(!empty($nombre)){
        echo "<p>Su nombre es <strong>" . $nombre . "</strong></p>";
    }else{
        echo "<p class='vacio'>No ha indicado su nombre<p>";
    }

    if(!empty($apellidos)){
        echo "<p>Sus apellidos son <strong>" . $apellidos . "</strong></p>";
    }else{
        echo "<p class='vacio'>No ha indicado sus apellidos<p>";
    }

    if(!empty($edad)){
        echo "<p>Tienes <strong>" . $edad . " años</strong></p>";
    }else{
        echo "<p class='vacio'>No ha indicado su edad<p>";
    }

    if(!empty($peso)){
        echo "<p>Su peso es de <strong>" . $peso . "kg</strong></p>";
    }else{
        echo "<p class='vacio'>No ha indicado su peso<p>";
    }

    if(!empty($sexo)){
        if ($sexo == "Hombre"){
            echo "<p>Es un <strong>" . $sexo . "</strong></p>";
        }else{
            echo "<p>Es una <strong>" . $sexo . "</strong></p>";
        }
    }else{
        echo "<p class='vacio'>No ha indicado su sexo<p>";
    }

    if(!empty($estado)){
        if ($estado == "Otro"){
            echo "<p>Su estado civil no es <strong>ni casado ni soltero</strong></p>";
        }else{
            echo "<p>Su estad0 civil es <strong>" . $estado . "</strong></p>";
        }
    }else{
        echo "<p class='vacio'>No ha indicado su estado civil<p>";
    }

    if(!empty($aficiones)){
        echo "<p>Le gusta: <strong>";
        for ($i = 0; $i < count($aficiones); $i++){
            echo $aficiones[$i] . ", ";
        }
        echo "</strong></p>";
    }else{
        echo "<p class='vacio'>No ha indicado sus aficiones</p>";
    }

    ?>

<a href="../html/datos.html">Volver al formulario</a>
</body>
</html>
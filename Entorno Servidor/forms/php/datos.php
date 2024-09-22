<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
    <title>Datos personales</title>
</head>
<body>
    <h1>Datos personales</h1>
    <?php
    if(isset($_POST["nombre"])){
        echo "Su nombre es " . $_POST["nombre"];
    }else{
        echo "No ha indicado su nombre";
    }

    ?>
</body>
</html>
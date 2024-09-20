<?php

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css">
    <title>Bienvenido</title>
    <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
    </style>
</head>
<body>
    <h1>Bienvenido <?=$_POST["user"]?></h1>
    <div>
        <p>Nombre de usuario: <?=$_POST["user"]?></p>
        <p>Contraseña: <?=$_POST["passwd"]?></p>
    </div>
    <a href="../html/login.html">Cerrar sesión</a>
</body>
</html>
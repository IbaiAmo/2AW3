<?php
require_once("Model/db.php");
require_once("Controller/personas_controlador.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        body{
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100dvh;
            background-image: url("https://static.vecteezy.com/system/resources/previews/026/307/268/original/cool-plain-blue-abstract-background-hd-wallpaper-design-free-vector.jpg");
            background-size: cover;
            background-position: center;
        }

        table{
            background-color: white;
            border-collapse: collapse;
            box-shadow: 0px 0px 7px #0000005a;
        }

        td{
            text-align: center;
            padding: 5px 10px;
        }

        tr{
            &:nth-child(odd){
                background-color: #e8e8e8;
            }
            &:nth-of-type(1){
                background-color: #2896d3;
                color: white;
            }
        }
    </style>
</head>
<body>
    
</body>
</html>
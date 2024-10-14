<?php

class Vista {

    public function inithtml() {
        echo '<!DOCTYPE html>';
        echo '<html lang="es">';
        echo '<head>';
        echo '<meta charset="UTF-8">';
        echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
        echo '<link rel="stylesheet" href="../../css/main.css">';
        echo '<link rel="icon" href="https://cdn-icons-png.flaticon.com/512/2286/2286432.png">';
        echo '<title>Caballeros MVC</title>';
        echo '</head>';
        echo '<body>';
    }

    public function endhtml() {
        echo '</body>';
        echo '</html>';
    }
}
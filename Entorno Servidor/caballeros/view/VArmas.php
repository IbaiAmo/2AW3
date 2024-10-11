<?php

use Model\Conexion;

include_once("vista.php");
class VArmas extends Vista{
    public function tablaArmas($armas){?>
    <div class="tabla">
        <table>
            <thead>
                <th>Id</th>
                <th>Daño</th>
                <th>Tipo</th>
            </thead>
            <tbody>
            <?php
            foreach($armas as $arma){?>
                <tr>
                    <td><?=$arma['id']?></td>
                    <td><?=$arma['danio']?></td>
                    <td><?=$arma['tipo']?></td>
                </tr>            
            <?php }
            ?>
            </tbody>
        </table>
    </div>
<?php }
}
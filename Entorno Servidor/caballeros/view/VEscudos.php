<?php
include_once("vista.php");

class VEscudos extends Vista{
    public function verEscudos($escudos){ ?>
        <a href="">Crear escudo</a>
        <div class="tabla">
            <table>
                <thead>
                    <th>Id</th>
                    <th>Defensa</th>
                    <th>Tipo</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                <?php
                foreach($escudos as $escudo){?>
                    <tr>
                        <td><?=$escudo['id']?></td>
                        <td><?=$escudo['defensa']?></td>
                        <td><?=$escudo['tipo']?></td>
                        <td><div class="acciones">
                            <a href="">Eliminar</a>
                            <a href="">Modificar</a>
                        </div></td>
                    </tr>            
                <?php }
                ?>
                </tbody>
            </table>
        </div>
    <?php
    }
}
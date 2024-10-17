<?php
include_once("vista.php");

class VCaballeros extends Vista{
    public function verCaballeros($caballeros){ ?>
        
        <div class="tabla">
        <a class="crearBtn" href="./formularioCaballero.php">Crear caballero</a>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Fuerza</th>
                    <th>Nivel</th>
                    <th>Arma</th>
                    <th>Escudo</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                <?php
                foreach($caballeros as $caballero){?>
                    <tr>
                        <td><?=$caballero['id']?></td>
                        <td><?=$caballero['nombre']?></td>
                        <td><?=$caballero['fuerza']?></td>
                        <td><?=$caballero['nivel']?></td>
                        <td><?=$caballero['id_arma']?></td>
                        <td><?=$caballero['id_escudo']?></td>
                        <td><div class="acciones">
                            <a class="eliminar" href="./deleteCaballero.php?id=<?=$caballero['id']?>">Eliminar</a>
                            <a class="modificar" href="./editarCaballero.php?id=<?=$caballero['id']?>">Modificar</a>
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
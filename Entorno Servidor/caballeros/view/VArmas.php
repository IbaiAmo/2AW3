<?php

use Model\Conexion;

include_once("vista.php");
class VArmas extends Vista{
    public function tablaArmas($armas){?>
    <a href="../controller/formArma.php">Crear arma</a>
    <div class="tabla">
        <table>
            <thead>
                <th>Id</th>
                <th>Daño</th>
                <th>Tipo</th>
                <th>Acciones</th>
            </thead>
            <tbody>
            <?php
            foreach($armas as $arma){?>
                <tr>
                    <td><?=$arma['id']?></td>
                    <td><?=$arma['danio']?></td>
                    <td><?=$arma['tipo']?></td>
                    <td><div class="acciones">
                        <a href="../controller/eliminarArma.php?id=<?=$arma['id']?>">Eliminar</a>
                        <a href="../controller/formModArma.php?id=<?=$arma['id']?>">Modificar</a>
                    </div></td>
                </tr>            
            <?php }
            ?>
            </tbody>
        </table>
    </div>
<?php }

    public function armaForm(){?>
    
        <form action="../controller/crearArma.php" method="post">
            <input type="number" name="danio" placeholder="Daño">
            <input type="text" name="tipo" placeholder="Tipo">
            <input type="submit" value="Crear arma">
        </form>

<?php
    }

    public function formEditArma($id, $danio, $tipo){ ?>

        <form action="../controller/modArma.php" method="post">
            <input type="number" readonly name="id" value="<?=$id?>">
            <input type="number" name="danio" placeholder="Daño" value="<?=$danio?>">
            <input type="text" name="tipo" placeholder="Tipo" value="<?=$tipo?>">
            <input type="submit" value="Editar arma">
        </form>

<?php 
    }
}
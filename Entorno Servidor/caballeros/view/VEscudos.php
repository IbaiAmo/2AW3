<?php
include_once("vista.php");

class VEscudos extends Vista{
    public function verEscudos($escudos){ ?>
        
        <div class="tabla">
        <a class="crearBtn" href="./formularioEscudo.php">Crear escudo</a>
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
                            <a class="eliminar" href="./deleteEscudo.php?id=<?=$escudo['id']?>">Eliminar</a>
                            <a class="modificar" href="./editarEscudo.php?id=<?=$escudo['id']?>">Modificar</a>
                        </div></td>
                    </tr>            
                <?php }
                ?>
                </tbody>
            </table>
        </div>
    <?php
    }

    public function escudoForm(){?>
    
        <form action="./insertEscudo.php" method="post">
            <input type="number" name="defensa" placeholder="Defensa">
            <input type="text" name="tipo" placeholder="Tipo" autocomplete="off">
            <input type="submit" value="Crear escudo">
        </form>

        <a href="./listarEscudos.php">Volver</a>

<?php
    }

    public function escudoUpdateForm($id, $defensa, $tipo){?>
    
        <form action="./updateEscudo.php" method="post">
            <input type="number" name="id" readonly value="<?=$id?>">
            <input type="number" name="defensa" placeholder="Defensa" value="<?=$defensa?>">
            <input type="text" name="tipo" placeholder="Tipo" autocomplete="off" value="<?=$tipo?>">
            <input type="submit" value="Guardar y salir">
        </form>

        <a href="./listarEscudos.php">Volver</a>

<?php
    }
}
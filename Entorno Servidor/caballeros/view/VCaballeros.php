<?php
include_once("vista.php");
include_once(__DIR__ . "/../model/MArma.php");
include_once(__DIR__ . "/../model/MEscudo.php");

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
                        <td><?=MArma::tipoArma($caballero['id']) ?></td>
                        <td><?=MEscudo::tipoEscudo($caballero['id'])?></td>
                        <td><div class="acciones">
                            <a class="eliminar" href="./deleteCaballero.php?id=<?=$caballero['id']?>">Eliminar</a>
                            <a class="modificar" href="./editarCaballeroForm.php?id=<?=$caballero['id']?>">Modificar</a>
                        </div></td>
                    </tr>            
                <?php }
                ?>
                </tbody>
            </table>
        </div>
        <a href="../../index.php">Volver</a>
    <?php
    }

    public function editarCaballero($id, $nombre, $fuerza, $nivel, $idArma, $idEscudo, $armas, $escudos){?>
        
        <form action="caballeroUpdate.php" method="post">

            <input type="number" readonly name="id" value="<?=$id?>">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder="Nombre" value="<?=$nombre?>" autocomplete="off" required>
            <label for="nombre">Fuerza</label>
            <input type="number" name="fuerza" id="fuerza" placeholder="Fuerza" value="<?=$fuerza?>" required>
            <label for="nombre">Nivel</label>
            <input type="number" name="nivel" id="nivel" placeholder="Nivel" value="<?=$nivel?>" required>
            
            <label>Arma</label>
            <select name="arma" id="armaSelect">
                <option value="Sin asignar">Sin asignar</option>
                <?php
                    foreach($armas as $arma){?>
                        <option value="<?=$arma['id']?>"><?=$arma['id'] . " - " . $arma['tipo']?></option>
                    <?php
                    }
                ?>
            </select>

            <label>Escudo</label>
            <select name="escudo" id="escudoSelect">
                <option value="Sin asignar">Sin asignar</option>
                <?php
                    foreach($escudos as $escudo){?>
                        <option value="<?=$escudo['id']?>"><?=$escudo['id'] . " - " . $escudo['tipo']?></option>
                    <?php
                    }
                ?>
            </select>
            <input type="submit" value="Guardar">

                <!--Esto es para usarlo en JS abajo-->
                <p hidden id="idArma"><?=$idArma?></p>
                <p hidden id="idEscudo"><?=$idEscudo?></p>
        </form>
        <a href="./listarCaballeros.php">Volver</a>
    
        <script>
            const armas = document.querySelectorAll('#armaSelect > option');
            const escudos = document.querySelectorAll('#escudoSelect > option');
            const idArma = document.getElementById('idArma');
            const idEscudo = document.getElementById('idEscudo');

            for (let i = 0; i < armas.length; i++) {
                
                if (armas[i].value == idArma.textContent){
                    armas[i].setAttribute("selected", true);
                }
                
            }

            for (let i = 0; i < escudos.length; i++) {
                
                if (escudos[i].value == idEscudo.textContent){
                    escudos[i].setAttribute("selected", true);
                }
                
            }
            
            
        </script>
    <?php
    }

    public function formCaballero($armas, $escudos){?>
        
        <form action="insertCaballero.php" method="post">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder="Nombre" autocomplete="off" required>
            <label for="nombre">Fuerza</label>
            <input type="number" name="fuerza" id="fuerza" placeholder="Fuerza" required>
            <label for="nombre">Nivel</label>
            <input type="number" name="nivel" id="nivel" placeholder="Nivel" required>
            
            <label>Arma</label>
            <select name="arma" id="armaSelect">
                <option value="Sin asignar">Sin asignar</option>
                <?php
                    foreach($armas as $arma){?>
                        <option value="<?=$arma['id']?>"><?=$arma['id'] . " - " . $arma['tipo']?></option>
                    <?php
                    }
                ?>
            </select>

            <label>Escudo</label>
            <select name="escudo" id="escudoSelect">
                <option value="Sin asignar">Sin asignar</option>
                <?php
                    foreach($escudos as $escudo){?>
                        <option value="<?=$escudo['id']?>"><?=$escudo['id'] . " - " . $escudo['tipo']?></option>
                    <?php
                    }
                ?>
            </select>
            <input type="submit" value="Guardar">
        </form>
        <a href="./listarCaballeros.php">Volver</a>

    <?php
    }
}
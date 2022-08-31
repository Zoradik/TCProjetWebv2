<?php

include 'Consulter_traitement.php';
?>

<form method='post'>
    <input type='submit' name='Ajouter' method='post'>
    Ajoutez a la wishlist
    </input>


<select name="NomListe" method='post'>

    <?php
    for ($i = 0; $i < count($NomListesResult); $i++) {
    ?>
        <tr>
            <td><?= $NomListesResult[$i]['NomListe'] ?></td>
            <option value="<?= $NomListesResult[$i]['NomListe'] ?>"><?= $NomListesResult[$i]['NomListe'] ?></option>
            <!-- <td><a href='/update.php?Utilisateurs_ID=<? //= $tab[$i]['ID_utilisateurs'] 
                                                            ?>'>
                            <button class="btn btn-dark" type="button">Update</button> </td>
                    <td><a href='/delete.php?Utilisateurs_ID=<? //= $tab[$i]['ID_utilisateurs'] 
                                                                ?>'>
                            <button class="btn btn-dark" type="button">Supprimer</button> </td> -->
        </tr>
        </br>
    <?php } ?>

</select>
</form>
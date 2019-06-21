<?php
$limite = 10
$maximo = 100
$acumulador = 0
$contador = 0


for (let $i = 0; $i < limite; $i++) {
    contador = $i
    console.log(i)
    if($acumulador + ($i*$i) > $maximo){
        break
    }
    $acumulador += ($i*$i)
}


echo ($acumulador.','.$contador)

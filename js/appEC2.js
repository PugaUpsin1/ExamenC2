
function descarte(){
    let origen = document.getElementById('origen');
    let destino = document.getElementById('destino');

    if(origen.selectedIndex == 1){
        destino.options[1].style.display = 'none';
        destino.options[2].style.display = 'block';
        destino.options[3].style.display = 'block';
        destino.options[4].style.display = 'block';
    }
    if(origen.selectedIndex == 2){
        destino.options[2].style.display = 'none';
        destino.options[1].style.display = 'block';
        destino.options[3].style.display = 'block';
        destino.options[4].style.display = 'block';
    }
    if(origen.selectedIndex == 3){
        destino.options[3].style.display = 'none';
        destino.options[2].style.display = 'block';
        destino.options[1].style.display = 'block';
        destino.options[4].style.display = 'block';
    }
    if(origen.selectedIndex == 4){
        destino.options[4].style.display = 'none';
        destino.options[2].style.display = 'block';
        destino.options[3].style.display = 'block';
        destino.options[1].style.display = 'block';
    }
}





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

function calcularcam() {
    let cant = document.getElementById('cant').value;
    let origen = document.getElementById('origen').value;
    let destino = document.getElementById('destino').value;
    console.log(cant);
    
    cambio(cant, origen, destino)
    function cambio(cant, origen, destino){
        let sub = 0;
        if(origen == 19.85){
            sub = cant / 19.85 * destino;
        }else if(origen == 1){
            sub = cant / 1 * destino;
        }else if(origen == 1.35){
            sub = cant / 1.35 * destino;
        }
        else if(origen == .99){
            sub = cant / .99* destino;
        }
        document.getElementById('subtot').value = sub.toFixed(2);
        let comi = sub * 0.03; 
        document.getElementById('comi').value = comi.toFixed(2);
        let total = sub + comi;
        document.getElementById('tot').value = total.toFixed(2);
    }
}


function registrar(){
    var final=0;
    let tot= document.getElementById('tot').value;
    let parrafo = document.getElementById('tabla');
    let tf = document.getElementById('totalgeneral');
    let txt;
    var origen = document.getElementById('origen')[document.getElementById('origen').selectedIndex].text;
    var destino = document.getElementById('destino')[document.getElementById('destino').selectedIndex].text;
     let cant = document.getElementById('cant').value;
     let sub = document.getElementById('subtot').value;
     let comi= document.getElementById('comi').value;
     let total = document.getElementById('tot').value
     txt=cant + " " + origen + " a " + destino + " " + sub + " "
     + comi+ " " + total + "<br>";
     parrafo.innerHTML= parrafo.innerHTML + txt;
     final=  parseFloat(tot) + final ;
     tf.innerText=final;
}

function borrar() {
    let parrafo = document.getElementById('tabla');
    let tf = document.getElementById('totalgeneral');
    tf.innerHTML="";
    parrafo.innerHTML="<br><br>";
}
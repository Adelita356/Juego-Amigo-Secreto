// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigosecreto = [];


function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if(!nombre){
        alert("Por favor agregue un nombre");
        return;
    }
    if(listaAmigosecreto.includes(nombre)){
        alert(`No puede agregar ${listaAmigosecreto} ya se encuentra en la lista`);
    }

    listaAmigosecreto.push(nombre);
    mostrarLista();
    input.value = "";
}
           
function mostrarLista(){
    const mostrar = document.getElementById('listaAmigosecreto');
    mostrar.innerHTML = "";

    listaAmigosecreto.forEach( amigo => {
        const lis = document.createElement("lis"); 
        lis.textContent =  amigo;
        mostrar.appendChild(lis);
    });
}


function sortearAmigo() {


    if(listaAmigosecreto.length < 2){
        alert("Debe escribir al menos dos nombres,para sortear");
        return;
    }

    const nombreSorteo = listaAmigosecreto[Math.floor(Math.random() *listaAmigosecreto.length)];

    const resultadoSorteo = document.getElementById("resultado");
    resultadoSorteo.innerHTML = `${nombreSorteo} es el nombre ganador`;

    listaAmigosecreto = [];
    mostrarLista();
}

function reiniciarJuego(){
   document.getElementById("listaAmigosecreto").innerHTML="" ;
   document.getElementById("resultado").innerHTML="" ;
}


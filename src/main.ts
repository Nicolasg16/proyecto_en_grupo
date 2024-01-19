/*const $form = document.querySelector('form') as HTMLFormElement; //Se llama HTML
$form.addEventListener('submit', generarGrupos); // Escucha el evento submit

interface Grupo {
  nombreIntegrantes: string;
  numeroIntegrantes:number; //Se crea la interface del tipo de dato que va a recibir
}

const grupos: Grupo [] = [];

function generarGrupos(evento: Event): void {
  evento.preventDefault();
  const grupo: Grupo = {
  nombreIntegrantes: $form.nombreIntegrantes.value,
  numeroIntegrantes: $form.numeroIntegrantes.value, //Funcion que retorna lo que almaceno en generarGrupos
  };
  grupos.push(grupo);
  $form.reset();
  console.log(grupo);
  }*/

 // function obtenerNumeroGrupos(): number {
   // const cantidadParticipantes = grupos.reduce((total, grupo) => total + grupo.numeroIntegrantes, 0);
    //const cantidadGrupos = grupos.length;
  
    //const numeroGrupos = cantidadGrupos > 0 ? Math.ceil(cantidadParticipantes / cantidadGrupos) : 0;
  
 //return numeroGrupos;
    //console.log(numeroGrupos);
  //}


  addEventListener('submit', function(event) {
    event.preventDefault();
    generarGrupos();
});

function generarGrupos() {
    const nombreIntegrantesInput = document.getElementById('nombreIntegrantes') as HTMLInputElement;
    const numeroIntegrantesInput = document.getElementById('numeroIntegrantes') as HTMLInputElement;
    const resultContainer = document.getElementById('resultado');

    const nombreIntegrantes = nombreIntegrantesInput.value.split(',').map(integrante => integrante.trim());
    const numeroIntegrantes = parseInt(numeroIntegrantesInput.value, 10);

    const cantidadMinimaIntegrantes = 2;

    if (nombreIntegrantes.length === 0 || isNaN(numeroIntegrantes)) {
        alert('Verifica los datos ingresados');
        return;
    }

    else if (nombreIntegrantes.length === numeroIntegrantes|| numeroIntegrantes <= 1) {
      alert('La cantidad minima de integrantes por grupo es 2');
      return;
  }

    else if (nombreIntegrantes.length < numeroIntegrantes * cantidadMinimaIntegrantes) {
        alert('No es posible generar grupos, cambie la cantidad de grupos que desea obtener');
        return;
    }

  
    const grupos = creearGrupos(nombreIntegrantes, numeroIntegrantes);
    mostrarGrupos(grupos, resultContainer);
}

function creearGrupos(nombreIntegrantes: string[], numeroIntegrantes: number): string[][] {
    const cantidadMinimaIntegrantes = 2;
    const grupos: string[][] = Array.from({ length: numeroIntegrantes }, () => []);

    for (let i = 0; i < nombreIntegrantes.length; i++) {
        const member = nombreIntegrantes[i];
        const grupoIndex = i % numeroIntegrantes;
        grupos[grupoIndex].push(member);
    }

    return grupos;
}

function mostrarGrupos(grupos: string[][], container: HTMLElement | null) {
    if (!container) return;

    container.innerHTML = '';

    grupos.forEach((grupo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Grupo ${index + 1}: ${grupo.join(', ')}`;
        container.appendChild(listItem);
    });
}




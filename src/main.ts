const $form = document.querySelector('form') as HTMLFormElement; //Se llama HTML
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
  }

 // function obtenerNumeroGrupos(): number {
   // const cantidadParticipantes = grupos.reduce((total, grupo) => total + grupo.numeroIntegrantes, 0);
    //const cantidadGrupos = grupos.length;
  
    //const numeroGrupos = cantidadGrupos > 0 ? Math.ceil(cantidadParticipantes / cantidadGrupos) : 0;
  
 //return numeroGrupos;
    //console.log(numeroGrupos);
  //}

  
  



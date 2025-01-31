function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);


    if(elemento && elemento.localName === 'audio'){
         elemento.play();   

}
    else{
      //seletor não encontrado
       console.log('Elemento não encontrado ou seletor invalido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

  tecla.onclick = function(){
    tocaSom(idAudio);
  }


  tecla.onkeydown = function(event){

    if(event.code === 'Space' || event.code ==='Enter'){

        tecla.classList.add('ativa');  
    }

  }

  tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
  }
  
}
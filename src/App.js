import './index.css';

const lista = ["tana","nata","jujuca","jucaju", "sabao", "basao", "hamburguer", "maça", "pera", "morango"];
const ordenado = new Array();
const desordenado = new Array();

function anagrama(){
}

function adicionarPalavra(){
  lista.push(document.querySelector("texto").value);
}

function insereDesordenado(value){
    desordenado.push(value);
    desordenado.sort();
      if(ordenado.indexOf(value) !== -1){
    removeDesordenado(value);
  }
}

function insereOrdenado(value){
    if(ordenado.indexOf(value) === -1){
      ordenado.push(value);
    }
    if(desordenado.indexOf(value) !== -1){
       removeDesordenado(value);
    }
}

function removeDesordenado(value){
      desordenado.splice(desordenado.indexOf(value));
}

function Anagrama(var1, var2) {
  const aux = new Array();
  aux.push(var1);
  aux.push(var2);
  aux.sort();

  var aux1 = var1.split('').sort().join('');
  var aux2 = var2.split('').sort().join('');

if(var1 !== var2){
  if(var1.length === var2.length && aux1 === aux2){
    insereOrdenado(var2);
  }else{
    insereDesordenado(var2);
  }
}else{
  insereDesordenado(var2);
}

}

  for (var i = 0; i < lista.length; i++) {
    for (var j = 0; j < lista.length; j++) {
      Anagrama(lista[i],lista[j]);
    }
     
  }

  /*
    <h4>Anagrama</h4>
    <input type="text" id="texto"/>
    <br />
    <button onClick={() => adicionarPalavra()}>Adicionar Palavra</button>
    <button onClick={() => anagrama()}>Apresentar Anagrama</button>

    {ordenado.map((aux) => <li>{aux}</li> )}
  */ 

function App() {

  return (
    <div>  
      <br />
      <div id="conteudo">
        <h4>Array de Palavras</h4>
        <ul>
          {JSON.stringify(lista.sort())}
        </ul>
        
        <br />

        <h4>Lista Anagramas</h4>
        <ul>
          {JSON.stringify(ordenado)}
        </ul>

        <br />

        <h4>Lista não Anagramas</h4>
        <ul>
          {JSON.stringify(desordenado)}
        </ul>
      </div>
    </div>
  );

}

export default App;

// Desafio 1 - Crie a função compareTrue

function compareTrue(parametro1, parametro2){
  return parametro1 && parametro2;
}

const girafa = true;
const elefante = true;
const macaco = false;


// Desafio 2 - Crie a função splitSentence

function splitSentence (parametro3){
    return parametro3.split (' ');
}

// Desafio 3 - Crie a função concatName

function concatName(array){
  return `${array[array.length - 1 ]}, ${array[0]}`;
}

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties){
  return (wins * 3) + ties;

}

// Desafio 5 - Crie a função highestCount

function highestCount(numeros) {
  let numeroMaisAlto = Math.max(...numeros);
  let repeticoes = 0;

  for(let index = 0; index < numeros.length; index++) {
      if (numeros[index] === numeroMaisAlto){
        repeticoes++;
      }
  }
  return repeticoes;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea(base, altura){
  return (base * altura) / 2;

}

function calcRectangleArea(base, altura){
  return (base * altura)

}

function calcAllAreas(base, altura, forma){
  if (forma === 'triângulo'){
    let area1 = calcTriangleArea (base, altura);
    return (`O valor da área do triângulo é de: ${area1}`)
  } else if (forma === 'retângulo'){
    let area2 = calcRectangleArea(base, altura);
    return (`O valor da área do retângulo é de: ${area2}`)
  } else {
    return ('Não foi possível fazer o cálculo, insira uma forma geométrica válida')
  }

}



// Desafio 7 - Crie a função catAndMouse

function catAndMouse (mouse, cat1, cat2){
  let posicaoGato1 = Math.abs(cat1 - mouse);
  let posicaoGato2 = Math.abs(cat2 - mouse);

  if (posicaoGato1 < posicaoGato2){
    return ('cat1');
  } else if (posicaoGato2 < posicaoGato1){
    return ('cat2');
  } else {
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(numeros){
  let resultado = []

  for (let index = 0; index < numeros.length; index += 1 )
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (numeros[index] % 3 === 0 ){
      resultado.push ('fizz');
    } else if (numeros[index] % 5 === 0 ){
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }

    return (resultado);

}

// Desafio 9 - Crie a função encode e a função decode

  function encode(parametro4){
    let vogais = ['a','e','i','o','u'];
    let numeros = [1,2,3,4,5];
    let resultado = '';

    for (let index = 0; index < parametro4.length; index += 1){
      if (vogais.includes(parametro4[index])) {
        resultado += numeros[vogais.indexOf(parametro4[index])];
      } else {
        resultado += parametro4[index];
      }
    } 
      return (resultado);

  }

  function decode(parametro4Codificado){
    let vogais = ['a','e','i','o','u'];
    let numeros = ['1','2','3','4','5'];
    let resultado = '';

    for (let index = 0; index < parametro4Codificado.length; index += 1){
      if (numeros.includes(parametro4Codificado[index])) {
        resultado += vogais[numeros.indexOf(parametro4Codificado[index])];
      } else {
        resultado += parametro4Codificado[index];
      }
    } 
      return (resultado);
  }

// Desafio 10 - Crie a função techList

function techList(techs, nome) {
  if (!techs || techs.length === 0) {
    return [];
  }

  techs.sort();

  let resultado = techs.map(tech => {
    return {
      tech: tech,
      name: nome
    };
  });

  return resultado;
} 

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};

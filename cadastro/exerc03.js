console.clear();

var candidato = { nome: "Pedro", atestadoDeAntecedendes: "Válido", idade: 25, nacionalidade: "Brasileiro" };
var variavelDeControle = 0;

console.log("### DADOS DO CANDIDATO ###");

console.log("");

console.log("01 - Nome do candidato: " + candidato.nome);
console.log("02 - Status do atestado de antecedentes criminais, sendo Válido ou Inválido as opções permitidas: " + candidato.atestadoDeAntecedendes);
console.log("03 - Idade do candidato: " + candidato.idade);
console.log("04 - Nacionalidade do candidato: " + candidato.nacionalidade);

console.log("");

function verificaAntecedentes(pessoa){
  if (pessoa.atestadoDeAntecedendes == "Válido"){
    return true;
  }
    return false;
}

function verificaIdade(pessoa){
  if (pessoa.idade >= 18){
    return true;
  }
  return false;
}

function verificaNacionalidade(pessoa){
  if (pessoa.nacionalidade == "Brasileiro" || pessoa.nacionalidade == "Argentino"){
    return true;
  }
  return false;
}

console.log("### ANÁLISE DOS DADOS DO CANDIDATO ###");

console.log("");

if (verificaAntecedentes(candidato)){
  console.log("# Candidato possui atestado de antecedentes criminais válido.");
}

if (verificaAntecedentes(candidato) == false){
  console.log("# ALERTA!! Candidato rejeitado devido a problemas com atestado de antecedentes criminais.");
  variavelDeControle = 1;
}

if (verificaIdade(candidato)){
 console.log("# Candidato é maior de idade.");
}

if (verificaIdade(candidato) == false){
  console.log("# ALERTA!! Candidato rejeitado por ser menor de idade.");
  variavelDeControle = 1;
}

if (verificaNacionalidade(candidato)){
  console.log("# Candidato possui nacionalidade compatível com os requistos exigidos: " + candidato.nacionalidade + ".");
}

if (verificaNacionalidade(candidato) == false){
  console.log("# ALERTA!! Candidato rejeitado por questões de nacionalidade incompatível com os requistos exigidos: " + candidato.nacionalidade + ".");
  variavelDeControle = 1;
}

console.log("");

console.log("### RESULTADO DA ANÁLISE DOS DADOS DO CANDIDATO ###");

console.log("");

if (verificaAntecedentes(candidato)){
  
  if (verificaIdade(candidato)){
    
    if(verificaNacionalidade(candidato)){
      
      console.log("## Esse candidato foi APROVADO com Sucesso na pré-seleção!!  ##");
    }
  }
}


if (variavelDeControle > 0){
  console.log("## Esse candidato foi REPROVADO na pré-seleção.");
}


/*
if (verificaAntecedentes(candidato)== false || verificaIdade(candidato) == false || verificaNacionalidade(candidato) == false){
  console.log("## Esse candidato foi REPROVADO na pré-seleção."); 
}
*/


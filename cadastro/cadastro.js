var objetoNome = document.getElementById("nome");
var objetoIdade = document.getElementById("idade");
var objetoNaturalidade = document.getElementById("naturalidade");
var objetoAtestado = document.getElementById("atestado");


var alertaAntecedentes = document.getElementById("alertaAntecedentes");
var alertaNaturalidade = document.getElementById("alertaNaturalidade");
var alertaIdade = document.getElementById("alertaIdade");



function cadastrar() {

  var variavelDeControle;
  variavelDeControle == false;


  if (verificaAntecedentes()) {
    console.log("# Candidato possui atestado de antecedentes criminais válido.");
  }

  if (!verificaAntecedentes()) {
    console.log("# ALERTA!! Candidato rejeitado devido a problemas com atestado de antecedentes criminais.");
    variavelDeControle == true;
  }

  if (verificaIdade()) {
    console.log("# Candidato é maior de idade.");
  }

  if (!verificaIdade()) {
    console.log("# ALERTA!! Candidato rejeitado por ser menor de idade.");
    variavelDeControle == true;
  }

  if (verificaNaturalidade()) {
    console.log("# Candidato possui nacionalidade compatível com os requistos exigidos (Brasileiro ou Argentino)");
  }

  if (!verificaNaturalidade()) {
    console.log("# ALERTA!! Candidato rejeitado por questões de nacionalidade incompatível com os requistos exigidos (Brasileiro ou Argentino");
    variavelDeControle == true;
  }

  console.log("");

  console.log("### RESULTADO DA ANÁLISE DOS DADOS DO CANDIDATO ###");

  console.log("");

  if (verificaAntecedentes()) {

    if (verificaIdade()) {

      if (verificaNaturalidade()) {

        console.log("## Esse candidato foi APROVADO com Sucesso na pré-seleção!!  ##");
        window.alert("## Esse candidato foi APROVADO com Sucesso na pré-seleção!!  ##")
      }
    }
  }
  
  if(!verificaAntecedentes() || !verificaIdade() || !verificaNaturalidade()){
    console.log("## Esse candidato foi REPROVADO na pré-seleção. ##");
    window.alert("## Esse candidato foi REPROVADO na pré-seleção. Clique em OK para ver os problemas encontrados. ##")
  }
  
    

/*
  if (variavelDeControle == true) {
    console.log("## Esse candidato foi REPROVADO na pré-seleção.");
    window.alert("## Esse candidato foi REPROVADO na pré-seleção. Clique em OK para ver os problemas encontrados. ##")
  }*/


}

function verificaAntecedentes() {

  if (objetoAtestado.value === "Válido") {
    return true;
  }

  if (objetoAtestado.value === "Inválido") {

    alertaAntecedentes.innerHTML = "# ALERTA!! Candidato rejeitado devido a problemas com atestado de antecedentes criminais.";

    return false;
  }
}

function verificaIdade() {

  if (objetoIdade.value >= 18) {
    return true;
  }

  if (objetoIdade.value < 18) {
    alertaIdade.innerHTML = "# ALERTA!! Candidato rejeitado por ser menor de idade.";

    return false;
  }

}

function verificaNaturalidade() {

  if (objetoNaturalidade.value === "Brasileiro" || objetoNaturalidade.value === "Argentino") {


    return true;
  }

  if (objetoNaturalidade.value !== "Brasileiro" && objetoNaturalidade.value !== "Argentino") {
    alertaNaturalidade.innerHTML = "# ALERTA!! Candidato rejeitado por questões de nacionalidade incompatível com os requistos exigidos";

    return false;
  }

}

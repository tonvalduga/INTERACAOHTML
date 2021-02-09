var objetoTitulo = document.getElementById("titulo");


function capturarValorDoH1() {
    console.log(objetoTitulo.textContent);
}

function modificarValorDoH1() {
    objetoTitulo.innerHTML = "MEU NOVO TITULO";
}

function pintarDeVermelhoValorDoH1() {
    objetoTitulo.style.color = "red";
}

function centralizarValorDoH1() {
    objetoTitulo.style.textAlign = "center";
}
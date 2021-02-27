var token = window.localStorage.getItem('Token')

if (token == null) {
    console.log("token nulo")

    window.location.href = "../auth/login/login.html"


} else {
    console.log("token não é nulo")
    window.location.href = "../tarefas/tarefas.html"

}



var url = "";
var idRow = "";
var objetoGlobal;

function getListaObjetos(urlRecebida, id_table) {
    url = urlRecebida;
    $.ajax({
        url: url,
        contentType: 'application/json',
        cache: false,
        method: 'GET',
        dataType: 'json',
        headers: { "Authorization": window.localStorage.getItem('Token') },
        success: function(resposta) {
            //console.log(resposta)
            popularTabela(id_table, resposta);
        },
        error: function(resposta) {
            console.log(resposta)
        }

    });
}

function deletarObjeto(id) {
    idRow = id;
    $.ajax({
        url: url + idRow,
        contentType: 'application/json',
        cache: false,
        method: 'DELETE',
        dataType: 'json',
        headers: { "Authorization": window.localStorage.getItem('Token') },
        success: function(resposta) {
            //console.log(resposta)

            var row = document.getElementById(idRow);
            row.parentNode.removeChild(row);

        },
        error: function(resposta) {
            console.log(resposta)
        }

    });

}

function getObjectById(id) {
    console.log(url + id)
    $.ajax({
        async: false,
        url: url + id,
        contentType: 'application/json',
        cache: false,
        method: 'GET',
        dataType: 'json',
        headers: { "Authorization": window.localStorage.getItem('Token') },
        success: function(resposta) {

            objetoGlobal = resposta;

        },
        error: function(resposta) {
            console.log("erro: " + resposta)

            objetoGlobal = resposta;

        }

    });
}
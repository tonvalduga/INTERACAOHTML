function registrarApi(email, password) {
    var alertaRegistroObject = document.getElementById("alertaRegistro").value

    var usuario = JSON.stringify({ email: email, password: password })

    $.ajax({
        url: "http://escolarapp2.herokuapp.com/account/register/",
        contentType: 'application/json',
        cache: false,
        method: 'POST',
        dataType: 'json',
        data: usuario,
        success: function(resposta) {

            window.location.href = "../login/login.html"

        },
        error: function(error) {
            var erros = JSON.parse(error.responseText)

            console.log(erros.non_field_errors[0])

            objetoAlertaEmail.innerHTML = erros.non_field_errors[0]

            alertaRegistroObject.innerHTML = erros.non_field_errors[0]

        }
    });
}

 var objetoEmail = document.getElementById("email")
 var objetoPassword1 = document.getElementById("Senha")
 var objetoPassword2 = document.getElementById("Senha2")
 var objetoRegistro = document.getElementById("infoRegistro")

 objetoEmail.value = "fabioj@gmail.com";
 objetoPassword1.value = "123456";
 objetoPassword2.value = "123456";

function registrar() {

    var objetoEmail = document.getElementById("email").value;
    var objetoPassword1 = document.getElementById("Senha").value;
    var objetoPassword2 = document.getElementById("Senha2").value;
    var objetoRegistro = document.getElementById("infoRegistro")

    objetoEmail.value = "fabioj@gmail.com";
    objetoPassword1.value = "123456";
    objetoPassword2.value = "123456";

    if (objetoPassword1 == objetoPassword2) {
        objetoRegistro.innerHTML = "Igual";
        criarUsuario(objetoEmail, objetoPassword1);
    } else {
        objetoRegistro.innerHTML = "As senhas não coincidem!";

    }
}

function criarUsuario(objetoEmail, objetoPassword1) {

    var usuario = JSON.stringify({ email: objetoEmail, password: objetoPassword1 })

    $.ajax({
        url: "https://escolarapp2.herokuapp.com/account/register/",
        contentType: 'application/json',
        cache: false,
        method: 'POST',
        dataType: 'json',
        data: usuario,
        success: function(objetoToken) {

            console.log(objetoToken)

            const key = "Token " + objetoToken.key;

            //SALVANDO O TOKEN NO LOCAL STORAGE DO NAVEGADOR
            window.localStorage.setItem("Token", key);

            

        },
        error: function(error) {

            objetoRegistro.innerHTML = (error.responseText);
        }
    });
}
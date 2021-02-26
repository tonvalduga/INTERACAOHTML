var objetoEmail = document.getElementById("exampleInputEmail1");
var objetoPassword = document.getElementById("exampleInputPassword1");
var objetoLogin = document.getElementById("infologin");





objetoEmail.value = "pedroh.mix@gmail.com"
objetoPassword.value = "123456";



function login() {

   

    var email = objetoEmail.value
    var password = objetoPassword.value

    var usuario = { email: email, password: password }
    var usuarioJson = JSON.stringify(usuario)

    objetoLogin.innerHTML = "Autenticando";


    $.ajax({

               url: "http://escolarapp2.herokuapp.com/account/login/",
        contentType: 'application/json',
        cache: false,
        method: 'POST',
        dataType: 'json',
        data: usuarioJson,
        success: function (objetoToken) {
            console.log(objetoToken.key)

            const key = "Token " + objetoToken.key;

            //SALVANDO O TOKEN NO LOCAL STORAGE DO NAVEGADOR
            window.localStorage.setItem("Token", key);


           window.location.href = "../INTERACAOHTML/cadastro/cadastro.html"

        },
        error: function (error) {
            console.log(error)
            var erros = JSON.parse(error.responseText)

            objetoLogin.innerHTML = erros.non_field_errors[0];

            objetoPassword.value  = "";

            
        }
    });
}









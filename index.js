var token = window.localStorage.getItem('Token')

if (token == null) {
    console.log("token nulo")

    window.location.href = "auth/login/login.html"


} else {
    console.log("token não é nulo")
    window.location.href = "tarefas/tarefas.html"

}
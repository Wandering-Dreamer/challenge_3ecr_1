
document
    .querySelector("#botao-cadastrar1")
    .addEventListener("click", (event) => {
        event.preventDefault()

        const form = document.querySelector("form")

        const colaborador = {
            id: "id" + new Date().getTime(),
            nome: form.nome.value,
            email: form.email.value,
            cargo: form.cargo.value,
            area: form.area.value,
            matricula: form.matricula.value,
            treinamentos: form.treinamentos.value,
            status: 0
        }

        salvar(colaborador)
    })

function salvar(colaborador){
    const colaboradores = JSON.parse(localStorage.getItem("colaboradores")) || []
    colaboradores.push(colaborador)
    localStorage.setItem("colaboradores", JSON.stringify(colaboradores))

    window.location = "index.html"
}

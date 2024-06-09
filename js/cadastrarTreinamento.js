
document
    .querySelector("#botao-cadastrar")
    .addEventListener("click", (event) => {
        event.preventDefault()

        const form = document.querySelector("form")

        const treinamento = {
            id: "id" + new Date().getTime(),
            titulo: form.titulo.value,
            descricao: form.descricao.value,
            data: form.data.value,
            instrutor: form.instrutor.value,
            duracao: form.duracao.value,
            status: 0
        }

        salvar(treinamento)
    })

function salvar(treinamento){
    const treinamentos = JSON.parse(localStorage.getItem("treinamentos")) || []
    treinamentos.push(treinamento)
    localStorage.setItem("treinamentos", JSON.stringify(treinamentos))

    window.location = "index.html"
}

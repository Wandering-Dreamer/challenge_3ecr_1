const colaboradores = JSON.parse(localStorage.getItem("colaboradores")) || []

const dados = colaboradores.filter(t => t.status < 100)
dados.forEach( colaborador => card(colaborador) )


function card(colaborador){

    const content = `
        <div>
                <p class="title">${colaborador.nome}</p>
                <p>${colaborador.email}</p>
                <p>${colaborador.cargo}</p>
                <p>${colaborador.area}</p>
                <p>${colaborador.matricula}</p>
                <a href="#">
                    <span>${colaborador.treinamentos}</span>
                </a> 
            </div>
        `

        const card = document.createElement("div")
        card.id = colaborador.id
        card.innerHTML = content

    document
        .querySelector("#listaDeColaboradores")
        .appendChild(card);
}
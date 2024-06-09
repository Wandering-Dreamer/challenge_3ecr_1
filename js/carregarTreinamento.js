const treinamentos = JSON.parse(localStorage.getItem("treinamentos")) || []

const dados = treinamentos.filter(t => t.status < 100)
dados.forEach( treinamento => card(treinamento) )


function card(treinamento){

    const content = `
        <div>
                <p>${treinamento.titulo}</p>
                <p>${treinamento.descricao}</p>
                <p>${treinamento.data}</p>
                <p>${treinamento.participantes}</p>
                <p>${treinamento.instrutor}</p>
                <a href="#">
                    <span>${treinamento.duracao}</span>
                </a> 
            </div>
        `

        const card = document.createElement("div")
        card.id = treinamento.id
        card.innerHTML = content

    document
        .querySelector("#listaDeTreinamentos")
        .appendChild(card);
}
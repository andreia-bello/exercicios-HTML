async function criar() {
    const id = document.getElementById('id').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value
    //Realizar a requisição para o back
    const response = await fetch(
        'http://localhost:3000/api/v1/pessoa',
        {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({ id, cpf, email })
        }
    )
    const data = await response.json()

    console.log(data)
    const resultado = document.getElementById('resultado')
    resultado.innerText = data.message
}

async function buscartodos() {
    // puxar os dados para exibir com um get listando todos os cadastros
    //fetch
    const response = await fetch('http://localhost:3000/api/v1/pessoas')
    const data = await response.json()

    const lista = document.getElementById("listaUsuarios")
    lista.innerHTML = ""

    data.pessoas.forEach(pessoa => {
        const li = document.createElement("li")
        li.innerText = `ID: ${pessoa.id} | CPF: ${pessoa.cpf} | Email: ${pessoa.email}`
        lista.appendChild(li)
    }
    );


    console.log(data)
}
function alterar() {
    alert('alterar')
}
function deletar() {
    alert('deletar')
}
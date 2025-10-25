async function start() {
    const filmes2025 = ['One Battle After Another', 'Sinners', 'Hamnet',
        'Sentimental Value', 'Bugonia', 'Thunderbolts', 'No Other Choice', 'Together',
        'Weapons', 'F1', 'Mickey 17', 'Materialists']
    const apikey = '&apikey=82281742'
    try {
        const mural = document.getElementById("filmes2025")
        mural.innerText = ""
        for (let n of filmes2025) {
            const tituloRequest = n.split(" ").join("+")
            const resposta = await fetch(`http://www.omdbapi.com/?t=${tituloRequest}${apikey}`)
            const dados = await resposta.json()
            const titulo = dados.Title
            const linkPoster = dados.Poster
            const div = document.createElement("div")
            const p = document.createElement("p")
            const img = document.createElement("img")
            img.src = linkPoster; p.textContent = titulo
            div.append(img, p); div.className = "posterFilme"
            mural.appendChild(div)
        }
    } catch (erro) {
        console.log(`Erro: ${erro}`)
        alert("Não foi possível encontrar.")
    }
}

async function pesquisar() {
    const apikey = '&apikey=82281742'
    const container = document.getElementsByClassName("container")
    const input = document.getElementById("inDados").value
    try {
        const tituloRequest = input.split(" ").join("+")
        const resposta = await fetch(`http://www.omdbapi.com/?t=${tituloRequest}${apikey}`)
        const dados = await resposta.json()
        console.log(`${input}\n${tituloRequest}`)
    } catch (erro) {
        console.log(`Erro: ${erro}`)
    }
}
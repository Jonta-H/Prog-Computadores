/* let musicas1 = [
    {
        nome: "Vive",
        artista: "Djavan",
        album: "Rua dos Amores",
        lancamento: 2012
    },
    {
        nome: "Recomeçar",
        artista: "Tim Bernardes",
        album: "Recomeçar",
        lancamento: 2017
    },
    {
        nome: "Feel",
        artista: "Kendrick Lamar",
        album: "DAMN",
        lancamento: 2016
    }
] */

let musicas2 = []

for(let i = 0; i < 4; i++){
    let nome = prompt(`Informe o nome da ${i+1}ª música`)
    let artista = prompt(`Informe o nome do artista`)
    let lancamento = Number(prompt(`Ano de lançamento`))

    let msc = {
        nome: nome,
        artista: artista,
        lancamento: lancamento
    }

    musicas2.push(msc)
}

for(let i = 0; i < 4; i++){
    console.log(`Música: ${musicas2[i].nome}, Artista: ${musicas2[i].artista}, Lançamento: ${musicas2[i].lancamento}`)
}

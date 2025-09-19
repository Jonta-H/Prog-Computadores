let biblioteca = [], totalPaginas = 0

for (let i = 0; i < 5; i++) {
    let nomeLivro = prompt(`Informe o nome do ${i + 1}º livro`)
    let autor = prompt(`Informe o nome do autor`)
    let anoPubli = Number(prompt(`O ano de publicação`))
    let qntPaginas = Number(prompt(`Quantidade de páginas`))

    totalPaginas+= qntPaginas

    let livro = {
        nome: nomeLivro,
        autor: autor,
        ano: anoPubli,
        paginas: qntPaginas
    }

    biblioteca.push(livro)
}

let maiorQntPaginas = biblioteca[0]

for(let i = 0; i < 5; i++){
    if(biblioteca[i].paginas > 300){
        console.log(biblioteca[i])
    }
    if(biblioteca[i].paginas > maiorQntPaginas.paginas){
        maiorQntPaginas = biblioteca[i]
    }
}

console.log(`Livro com mais páginas: ${maiorQntPaginas.nome}`)
console.log(`Média de páginas: ${totalPaginas/5}`)


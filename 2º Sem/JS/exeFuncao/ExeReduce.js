let vendas = [150,300,50,450,100]

let totalVendas = vendas.reduce((acc,valor) => acc + valor, 0)

console.log(totalVendas)
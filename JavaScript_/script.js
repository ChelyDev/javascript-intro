const avista = 0.1
const juros = 0.02

let barbie = {
    codigo: '300339',
    nome: "Barbie Original",
    valor: 500
}

function parcelar(produto, numParcelas){
        if (numParcelas <=12) {
            if (numParcelas <=10) {
                if (numParcelas==0) {
                    let valorAVista = produto.valor 
                    let valor = valorAVista * avista 
                    console.log(`Este é o valor do/a seu/sua ${barbie.nome} à vista: ${valorAVista - valor}`)
                    
                } else {
                    let valorParcelado = produto.valor / numParcelas
                    console.log(`Este é o valor do/a seu/sua ${barbie.nome} dividido sem juros de acordo com cada parcela: ${valorParcelado}`)
                   
                }
                
            } else {
                let valorDoJuros = produto.valor * juros
                let valorProdutoComJuros = produto.valor + valorDoJuros
                let valorParcelado = valorProdutoComJuros / numParcelas
                console.log(`Este é o valor do/a seu/sua ${barbie.nome} dividido com juros de acordo com cada parcela: ${valorParcelado}`)
            }
        } else {
            console.log("O número máximo de parcelas é 12")
        }
    }

parcelar(barbie, 15)
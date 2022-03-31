let produtos = document.querySelector('#produtos')
let botao = document.querySelector('#comprar')

botao.addEventListener('click', comprar)
function comprar() {
    let compra = "Produto comprado\n"

    if (produtos.value == "Xis dos Cria") {
        compra += "Produto: " + produtos.value + ", valor: R$35,00"

    } else if (produtos.value == "Xis das Pão Careca") {
        compra += "Produto: " + produtos.value + ", valor: R$22,00"

    } else if (produtos.value == "Xis do Tiozão") {
        compra += "Produto: " + produtos.value + ", valor: R$27,00"

    } else if (produtos.value == "Xis dos Kids") {
        compra += "Produto: " + produtos.value + ", valor: R$15,00"
    } else {
        compra += "produto não selecionado"

    }
    alert(compra)
}


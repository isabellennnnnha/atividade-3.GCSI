const produtos = [
    {
        nome: "Caneta",
        preco: 3
    },
    {
        nome: "Lápis",
        preco: 2
    },
    {
        nome: "Caderno",
        preco: 15
    },
    {
        nome: "Borracha",
        preco: 4
    }
];

function mostrarProdutos() {

    const lista = document.getElementById("produtos");

    lista.innerHTML = "";

    produtos.forEach(function(produto) {

        lista.innerHTML += `
            <div class="produto">
                <h3>${produto.nome}</h3>
                <p>Preço: R$ ${produto.preco}</p>
            </div>
        `;
    });
}


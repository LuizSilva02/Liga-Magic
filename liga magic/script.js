$(document).ready(function(){
    $('#card-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

var contador = 0;


function adicionarLista() {
    var cardDetails = {
        nome: "INTUITION",
        detalhes: "COR AZUL",
        precoMedio: "$5.00",
    };

    contador++;

    // Adicionar à lista
    
  /*   var cartList = document.getElementById("cart-list-ul");
    var listItem = document.createElement("li");
    listItem.innerHTML = `
        <div>
            <h4>${cardDetails.nome}</h4>
            <p>${cardDetails.detalhes}</p>
            <p>Preço Médio: ${cardDetails.precoMedio}</p>
        </div>
        <button onclick="removerLista(this)">Remover</button>
    `;
    cartList.appendChild(listItem); */

    // Atualizar o contador na interface
    atualizarContador();
}

function Remover() {

    if (contador == 0) {
        contador == 0;
    }else{
        contador--;
    }
    // Decrementar o contador global
    

    // Atualizar o contador na interface
    atualizarContador();
}


/* function removerLista(button) {
    var listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);

    // Decrementar o contador global
    contador--;

    // Atualizar o contador na interface
    atualizarContador();
} */

function atualizarContador() {
    document.getElementById("contador").innerText = contador;
}

document.getElementById('comprar3').addEventListener('click', ()=> {
    const valorUnidade3 = 10
    let quantidade = document.getElementById('quantidade').value
    let valorTotal = quantidade * valorUnidade3
    document.getElementById('valortotal').innerHTML = `R$ ${valorTotal},00`
    })



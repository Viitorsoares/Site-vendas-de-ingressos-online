document.getElementById('comprar2').addEventListener('click', ()=> {
    let valorUnidade2 = 35
    let quantidade = document.getElementById('quantidade').value
    let valorTotal = quantidade * valorUnidade2
    document.getElementById('valortotal').innerHTML = `R$ ${valorTotal},00`
})
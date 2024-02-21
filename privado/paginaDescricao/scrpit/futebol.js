let valorUnidade3 = 10

document.getElementById('comprar3').addEventListener('click', ()=> {
    let quantidade = document.getElementById('quantidade').value
    let valorTotal = quantidade * valorUnidade3
    alert(`${valorTotal}`)
})

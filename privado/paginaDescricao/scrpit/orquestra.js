let valorUnidade1 = 45

document.getElementById('comprar1').addEventListener('click', ()=> {
    let quantidade = document.getElementById('quantidade').value
    let valorTotal = quantidade * valorUnidade1
    alert(`${valorTotal}`)
})

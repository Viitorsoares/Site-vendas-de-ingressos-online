let valorUnidade2 = 35

document.getElementById('comprar2').addEventListener('click', ()=> {
    let quantidade = document.getElementById('quantidade').value
    let valorTotal = quantidade * valorUnidade2
    alert(`${valorTotal}`)
})
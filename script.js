function contar () {
    var inicio = document.getElementById("txti")
    var fim = document.getElementById("txtf")
    var passo = document.getElementById('txtp')
    var res = document.querySelector('div#res')

    if(inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0 ){
        res.innerHTML = "Impossível de contar"
    } else {
        res.innerHTML = "Contando: "
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
    } if (i < f){
        for(var c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
        }
    } else {
        for(var c = i; c <= f; c -= p){
            res.innerHTML = `${c} \u{1F449}`
        }
    }
       
}
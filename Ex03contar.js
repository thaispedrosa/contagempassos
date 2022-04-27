function calcular() {
    let i = document.getElementById('início')
    let f = document.getElementById('fim')
    let p = document.getElementById('passos')
    let res = document.getElementById('res')
    
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
    window.alert('[ERRO] Impossível contar!')
} else {
    let ini = Number(i.value)
    let fim = Number(f.value)
    let pa = Number(p.value)
    res.innerHTML=""
        for (let c = ini; c <= fim; c+=pa) {
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

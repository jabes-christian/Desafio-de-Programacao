let gerarAnagramas = (palavra, n = null, anagrama = '', anagramas = []) => {
    palavra = palavra.toUpperCase()
    if(anagrama) {
        anagramas.push(anagrama)
    }
    if(!palavra) {
        return
    }
    for (let i = 0; i < palavra.length; i++) {
        anagrama += palavra[i]
        gerarAnagramas(palavra.slice(0, i) + palavra.slice(i + 1), n, anagrama, anagramas)
        anagrama = anagrama.slice(0, anagrama.length - 1)
    }
    let unico = [...new Set(anagramas)]
    let hash = {}
    for (let i = 0; i < unico.length; i++) {
        anagrama = unico[i]
        let len = anagrama.length
        if (!(len in hash)) {
            hash[len] = [anagrama]
        } else {
            hash[len].push(anagrama)
        }
    }
    return n === null ? unico : hash[n]
}
console.log(gerarAnagramas('AaBC', 3))

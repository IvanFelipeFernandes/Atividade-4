//1 - crie uma função que exiba uma mensagem no console
function mensagem() {
    console.log("Aqui está a mensagem")    
}
mensagem()
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function nome(Ivan) {
    console.log(`Meu nome é ${Ivan}`)    
}
nome("Ivan Felipe Fernandes Gomes")
//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function resumoPessoal(nome, idade, estilo){
    console.log(`Meu nome é ${nome} e tenho ${idade} anos e gosto de ${estilo}`)
}
resumoPessoal("Ivan", 29, "samba")
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function gostoArtistico(filme, música){
    console.log(`${filme} foi o filme que mais gostei em 2021 e ${música} e uma das minhas músicas prediletas`)
}
gostoArtistico("King of Boys", "Fato Consumado")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo(x){
    return 3 * x
}

console.log(triplo(8))

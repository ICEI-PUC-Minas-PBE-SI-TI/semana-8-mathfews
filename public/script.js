const output = document.getElementById("output")
const catalogo = [
    {
        id: 1,
        titulo: "500 dias com ela",
        tipo: "filme",
        ano: 2009,
        generos: ["romance", "comedia"],
        nota: 9,
        assistido: true
    },
    {
        id: 2,
        titulo: "Clube da Luta",
        tipo: "filme",
        ano: 1999,
        generos: ["ações", "suspense"],
        nota: 10,
        assistido: true
    },
    {
        id: 3,
        titulo: "O show de Truman",
        tipo: "filme",
        ano: 1998,
        generos: ["drama", "suspense"],
        nota: 10,
        assistido: true
    },
    {
        id: 4,
        titulo: "12 Angry Man(12 homens e uma sentença)",
        tipo: "filme",
        ano: 1957,
        generos: ["ações", "suspense"],
        nota: 10,
        assistido: true
    },
    {
        id: 5,
        titulo: "Whiplash",
        tipo: "filme",
        ano: 2014,
        generos: ["drama"],
        nota: 0,
        assistido: false
    },
    {
        id: 6,
        titulo: "Breaking Bad",
        tipo: "série",
        ano: 2008,
        generos: ["ações", "suspense"],
        nota: 10,
        assistido: true
    }
]
console.log(`Título do primeiro item: ${catalogo[0].titulo}`)
console.log(`Ano do último item: ${catalogo[catalogo.length - 1].ano}`)
if (catalogo[2].generos.length >= 2) {
    console.log(`Segundo gênero do terceiro item: ${catalogo[catalogo.length - 1].titulo}`)
}
else {
    console.log("O terceiro item não possui um segundo gênero!")
}

catalogo.forEach((fruta,index) => {
    console.log(`[${catalogo[index].tipo}] ${catalogo[index].titulo} (${catalogo[index].ano})`)
})

const titulosEmCaixaAlta = catalogo.map(items => items.titulo.toUpperCase());
titulosEmCaixaAlta.forEach((titulo, index) => {
    console.log(titulo)
})

const naoAssistidos = catalogo.filter(item => item.assistido == false)

console.log(`Existem: ${naoAssistidos.length} items não assistidos`)

const notaMaiorIgual9 = catalogo.find(item => item.nota >= 9)
if (notaMaiorIgual9 != undefined) {
    console.log(`Titulo: ${notaMaiorIgual9.titulo} - Nota: ${notaMaiorIgual9.nota}`)
}
else {
    console.log("Não existe item com nota maior ou igual a 9.")
}

const notas = catalogo.map(item => item.nota)

const soma = notas.reduce((acoumulador, atual) => {
    return acoumulador + atual
}, 0)
const media = (soma / notas.length).toFixed(2)

const assistidos = catalogo.filter(item => item.assistido == true)

const notaAssistidos = assistidos.map(item => item.nota)

const somaAssistidos = notaAssistidos.reduce((acomulador, atual) => {
    return acomulador + atual
}, 0)

const mediaAssistidos = (somaAssistidos / notaAssistidos.length).toFixed(2)

console.log(`A média das notas foi de ${media}`)
console.log(`A média das notas dos assistidos foi de ${mediaAssistidos}`)

const antes2000 = catalogo.some(item => item.ano < 2000);

if (antes2000) {
    console.log("Existe um item com a data de lançamento antes do ano 2000.")
}
else {
    console.log("Não existe nenhum item com a data de lançamento antes do ano 2000.")
}

const umGenero = catalogo.every(item => item.generos.length >= 1)

if (umGenero) {
    console.log("Todos os items têm pelo menos 1 gênero")
}
else {
    console.log("Nem todos os items têm pelo menos 1 gênero")    
}

const quantidadeFilmes = catalogo.filter(item => item.tipo == "filme")

const quantidadeSeries = catalogo.filter(item => item.tipo == "série")

const ranking = catalogo.sort((a,b) => b.nota - a.nota)


output.innerHTML = `<ul>
            <li>Total de items no catalogo: <b>${catalogo.length}</b></li>
            <li>Quantidade de filmes e quantidade de séries:</li>
            <ul>
                <li>Filmes: <b>${quantidadeFilmes.length}</b></li>
                <li>Séries: <b>${quantidadeSeries.length}</b></li>
            </ul>
            <li>Quantidade de não assistidos: <b>${naoAssistidos.length}</b></li>
            <li>Média geral de notas: <b>${media}</b></li>
            <li>Ranking dos 3 melhores</li>
            <ul>
                <li>⭐${ranking[0].titulo} - ${ranking[0].nota}</li>
                <li>⭐${ranking[1].titulo} - ${ranking[1].nota}</li>
                <li>⭐${ranking[2].titulo} - ${ranking[2].nota}</li>
            </ul>
        </ul>`
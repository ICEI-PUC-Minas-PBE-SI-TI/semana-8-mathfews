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
        titulo: "12 Angry Man",
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
        nota: 8,
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

console.log(catalogo)
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

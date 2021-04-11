let pessoa = {
    nome: 'david',
    sexo: 'M',
    idade: 31
}

for (var i in pessoa) {
    console.log(`${i}: ${pessoa[i]}`)
}
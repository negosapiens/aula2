// PROGRAMA DE CADASTRO DE PEÇAS 
// REQUISITOS 
// PEÇAS <100g pode cadastrar
// capacidade de caixa <10 imprima -> capacidade insuficiente 
// nome da peça < 3 caracteres -> imprima msg de erro

const listadepecas = ("pecas de teste", "AB", "pecaB");

console.log("quantidade de caracteres");

if (listadepecas <= 10) {
    console.log("as peças pode, ser cadastrada");
}
console.log("quantidade de caracteres");
for (let index = 0; index < listadepecas.length; index++) {
    const pecaatual = listadepecas[index];
    if (pecaatual.length < 3) {
        console.log(+pecaatual, "a peça possui nome inferio a 3 caracteres e não pode ser cadastrada.");
    }
    else {
        console.log(+pecaatual, "a peça não pode ser cadastrada.");
    }

    console.log('peso da peça');
    const pesodapecaemgramas = 50;

    if (pesodapecaemgramas >= 100) {
        console.log('peso suficiente');
    }
    else {
        console.log('valor isuficiente');
    }
}


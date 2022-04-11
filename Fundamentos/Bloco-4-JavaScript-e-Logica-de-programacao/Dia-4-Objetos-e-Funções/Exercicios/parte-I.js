//1//
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem-vinda," + " " + info.personagem);

//----------------------------------------------------------------------------//

//2//
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.recorrente = 'Sim',
    console.log(info)
//----------------------------------------------------------------------------//

//3//
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

for (let key in info) {
    console.log(key);
};

//----------------------------------------------------------------------------//

//4//
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

for (let disneyPerso in info) {
    console.log(info[disneyPerso]);
};

//----------------------------------------------------------------------------//

//5//
let info1 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

for (let key in info1, info2) {
    if (info1[key] != info2[key]) {
        console.log(info1[key], "e", info2[key]);
    } else {
        console.log("Ambos recorrrentes");
    }
}

//----------------------------------------------------------------------------//

//6//
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

for (let key in leitor) {
    console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');
}


//----------------------------------------------------------------------------//

//7//
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
    },
);


//----------------------------------------------------------------------------//

//7//
console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos");
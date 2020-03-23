
// let animal = {
//     tipo: "Gato",
//     nome:"Elias",
//     idade: 3,
//     raça:undefined,
//     porte: "Grande",
//     sexo: "M",
//     vacinado:true,
//     tutor:{
//         nome:"Vinicius",
//         telefone:"(11)4002-8922"
//     }

// };

let listaDeAnimais = [
    {
        tipo: "Gato",
        nome:"Elias",
        idade: 4,
        raça:undefined,
        porte: "Grande",
        sexo: "M",
        vacinado:true,
        tutor:{
            nome:"Vinicius",
            telefone:"(11)4002-8922"
        }
    },
    {
        tipo:"Gato",
        nome:"Flor",
        idade:3,
        raça:undefined,
        porte:"Pequeno",
        sexo:"F",
        vacinado:true,
        tutor:{
            nome:"Vinicius",
            telefone:"(11)4002-8922"
        }
    }
];

function adicionarPet(tipo, nome, idade, raca, porte, sexo, vacinado, tutor){
    let novoPet = { 
        tipo,
        nome,
        idade:idade,
        raça:raca,
        porte:porte,
        sexo:sexo,
        vacinado:vacinado,
        tutor:{
            nome:tutor,
            telefone:undefined
        }
    }

    listaDeAnimais.push(novoPet);

    console.log("Pet cadastrado com sucesso!")

}


function visualizarPets(){
    for(let i =0; i < listaDeAnimais.length; i++){

        let animal = listaDeAnimais[i]
        console.log("------------------------------")
        console.log("Nome do Animal: " + animal.nome)
        console.log("Tipo de Animal: " + animal.tipo)
        console.log("Sexo do Animal: " + animal.sexo)
        console.log("Nome do tutor: " + animal.tutor.nome)
    }
}

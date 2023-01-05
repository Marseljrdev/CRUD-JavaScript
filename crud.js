

let listaPessoa = [];

function listPessoa() {
    console.clear();
    listaPessoa.map((value) => {
        console.log(` id: ${value.id} \n nome: ${value.nome} \n telefone: ${value.telefone}`);
    })
}

function addPessoa() {
    let name = prompt('Digite seu nome');
    let telephone = prompt('Digite seu telefone');

    if(name == '' || telephone == ''){
        alert('Porfavor insira seu nome e telefone');
        return;
    }

    let phoneRepeated = listaPessoa.some((value) => value.telefone == telephone);

    if(phoneRepeated == true) {
        alert('Telefone ja cadastrado');
        return;
    }

    let newPessoa = {
        id: parseInt(Math.random() * 1000),
        nome: name,
        telefone: telephone,
    };

    listaPessoa.push(newPessoa);
    // console.log(listaPessoa);
    listPessoa();

}


function updatePessoa() {
    let getId = parseInt(prompt('Digite o id para atualizar'));

    let findId = listaPessoa.find((value) => value.id == getId);

    if(!findId) {
        alert('Usuario nao encontrado');
        return;
    }

    let novoNome = prompt('Digite seu nome');
    let novoTelefone = prompt('Digite seu telefone');

    findId.nome = novoNome;
    findId.telefone = novoTelefone;

    alert(`Usuario com o id: ${findId.id} atualizado com sucesso`);
    listPessoa();

}

function deletePessoa() {
    let getId = parseInt(prompt('Digite o id que deseja apagar'));

    let findInd = listaPessoa.findIndex((value) => value.id == getId);

    if(findInd != -1) {
        listaPessoa.splice(findInd, 1);
        alert('Usuario deletado com sucesso');
        return;
    }else {
        alert('Usuario nao encontrado');
    }

    listPessoa();


}
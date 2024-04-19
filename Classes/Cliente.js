/* Exportando o módulo 'fs' (File System) do Node.js, que permite interagir com
sistema de arquivos do sistema operacional*/
const fs = require('fs');

class Cliente {
    constructor(nome,cpf,dataNascimento,email,telefone,posicaoJoga){
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.telefone = telefone;
        this.posicaoJoga = posicaoJoga; 
    }

    Saudar(){
        console.log(`${this.nome}, seja muito bem-vinda à Academia de Futebol Feminino.
        Estamos muito felizes que esteja por aqui.`)
    }

    Cadastrar(){
        
        const dadosCliente = {
            nome: this.nome,
            cpf: this.cpf,
            dataNascimento: this.dataNascimento,
            email: this.email,
            telefone: this.telefone,
            posicaoJoga: this.posicaoJoga
        }

       // convertendo o objeto 'dadosCliente' para o formato JSON 
        const jsonDados = JSON.stringify(dadosCliente)

        // Especificando o nome do arquivo onde esse JSON será salvo
        const nomeArquivoJson = "cadastro.Clientes.json"

        /* o método 'writeFile' aceita 3 parâmetros: 
        1 - O nome do arquivo a ser criado (linha 35);
        2 - Os dados JSON criado a partir da conversão (Linha 32);
        3 - Função de retorno de chamada, que é chamada quando a operação
        de escrita é concluída
        */
        fs.writeFile(nomeArquivoJson,jsonDados,(err) => {
            if(err){
                console.error("Erro ao criar o arquivo", err);
                return;
            } else{
                console.log("Cliente cadastrada com sucesso!")
            }
        })   
    }
}

module.exports = Cliente;

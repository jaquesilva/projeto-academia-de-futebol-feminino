class Treino {
    constructor(data,hora,agendado = false){
        this.data = data;
        this.hora = hora;
        this.agendado = agendado;
    }

    agendarTreino(){
        if(!this.agendado){
            this.agendado = true;
            console.log(`Treino agendado para ${this.data} às ${this.hora}.`);
        } else {
            console.log("Este treino já está agendado.");
        }
    }

    exibirDetalhes(){
        console.log("Detalhes do Treino:");
        console.log(`Data: ${this.data}`);
        console.log(`Hora: ${this.hora}`);
        console.log(`Status: ${this.agendado ? "Agendado" : "Não agendado"}`);

    }
}

module.exports = Treino;
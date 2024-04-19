const Treino = require('./Treino')
class Reagendamento{
    constructor(novaData,novaHora){
        this.novaData = novaData;
        this.novaHora = novaHora;
    }
    reagendarTreino(treino){
        treino.data = this.novaData;
        treino.hora = this.novaHora;
        console.log(`Treino reagendado para ${treino.data} às ${treino.hora}`);
    }
}

module.exports = Reagendamento;

const Cliente = require('./Classes/Cliente');
const Treino = require('./Classes/Treino')
const Reagendamento = require('./Classes/Reagendamento')

const cliente = new Cliente("Jaque",11111111111,"26/11/1988","jaque@gmail.com","66996188224","Atacante");

// cliente.Saudar();
// cliente.Cadastrar();

const treino = new Treino("20/04/2024","14h");
treino.agendarTreino();
treino.exibirDetalhes();

const reagendamento = new Reagendamento("05/05/2024","15h");
reagendamento.reagendarTreino(treino);



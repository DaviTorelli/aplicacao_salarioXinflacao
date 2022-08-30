import read from 'readline-sync';

let info = [
    { ano: 2010, valor: 510.00, ipca: 5.91 },
    { ano: 2011, valor: 545.00, ipca: 6.50 },
    { ano: 2012, valor: 622.00, ipca: 5.84 },
    { ano: 2013, valor: 678.00, ipca: 5.91 },
    { ano: 2014, valor: 724.00, ipca: 6.41 },
    { ano: 2015, valor: 788.00, ipca: 10.67 },
    { ano: 2016, valor: 880.00, ipca: 6.29 },
    { ano: 2017, valor: 937.00, ipca: 2.95 },
    { ano: 2018, valor: 954.00, ipca: 3.75 },
    { ano: 2019, valor: 998.00, ipca: 4.31 },
    { ano: 2020, valor: 1045.00, ipca: 4.52 },
]

let labelAno = "Ano:";
let labelSalarioMinimo = "Salario Mínimo:";
let labelIpca = "Inflação do IPCA:";
let labelCrescimento = "Crescimento Salarial:";

console.log("***APLICAÇÃO SALÁRIO X INFLAÇÃO***");
console.log("estudos @devmedia\n");
do {
    console.log("Escolha uma das alternativas abaixo");
    console.log("1 - Trazer uma lista de salários mínimos de 2010 à 2020");
    console.log("2 - Trazer uma lista do índice IPCA de 2010 à 2020");
    console.log("3 - Trazer um comparativo entre o percentual de aumento salarial e IPCA.");
    console.log("4 - Encerrar o programa.");

    var opcao = read.question("Digite aqui sua escolha: ");

    switch (Number(opcao)) {
        case 1:
            console.log("Lista de salários mínimos (2010 - 2020)\n");

            for (let salarios of info) {
                let ano = salarios.ano;
                let salario = salarios.valor.toFixed(2);
                console.log(labelAno.padEnd(30, ".") + ano);
                console.log(labelSalarioMinimo.padEnd(30, ".") + "R$" + salario.replace(".", ","));
                console.log("\n");
            }
            break;

        case 2:
            console.log("Lista do índice IPCA (2010 - 2020).");
            for (let indice of info) {
                let ano = indice.ano;
                let ipca = indice.ipca.toFixed(2);
                console.log(labelAno.padEnd(30, ".") + ano);
                console.log(labelIpca.padEnd(30, ".") + ipca.replace(".", ",") + "%");
                console.log("\n");
            }
            break;

        case 3:
            console.log("Salário x IPCA.");

            let index = 0;

            for (let dados of info) {
                let ano = dados.ano;
                let salario = dados.valor.toFixed(2);
                let ipca = dados.ipca.toFixed(2);

                if (index == 0) {
                    var crescimento = 0;
                } else {
                    var salarioAnterior = info[index - 1].valor;

                    var diferenca = salario - salarioAnterior;
                    var crescimento = (diferenca / salarioAnterior) * 100;
                }
                index++;

                console.log(labelAno.padEnd(30, ".") + ano);
                console.log(labelSalarioMinimo.padEnd(30, ".") + "R$" + salario.replace(".", ","));
                console.log(labelCrescimento.padEnd(30, ".") + crescimento.toFixed(2).replace(".",",") + "%");
                console.log(labelIpca.padEnd(30, ".") + ipca.replace(".", ",") + "%");
                console.log("\n");

            }
            break;

        case 4:
            console.log("Você escolheu sair, o programa será encerrado.\n");
            break;

        default:
            console.log("\nOpção inválida.\n");
            break;
    }
} while (Number(opcao) != 4);
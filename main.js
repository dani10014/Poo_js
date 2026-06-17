class CriarFicha {
    #salario = 1300;

    constructor(nome, cargo, idade, local, linguagem) {
        this.nome = nome;
        this.cargo = cargo;
        this.idade = idade;
        this.local = local;
        this.linguagem = linguagem;
    }

    exibirFicha() {
        console.log(this.nome, this.cargo, this.idade, this.local, this.linguagem);
    }

    AumentoSalario(valor) {
        if (valor > 0) {
            this.#salario = this.#salario + valor;
        } else {
            console.log("Valor invalido");
        }
    }

    get salario() {
        return this.#salario;
    }
}

class CriarFicha2 extends CriarFicha {
    constructor(nome, cargo, idade, local, linguagem) {
        super(nome, cargo, idade, local, linguagem);
    }

    exibirFicha() {
        super.exibirFicha();
        const salario = this.salario;
        console.log(`Salario: R$ ${salario}`);
        console.log("-----------------------");
    }
}


class FichaGerente extends CriarFicha {
    constructor(nome, cargo, idade, local) {
        super(nome, cargo, idade, local, "Não se aplica");
    }

    exibirFicha() {
        super.exibirFicha();
        console.log(`Salario: R$ ${this.salario}`);
        console.log("-----------------------");
    }
}

const dev1 = new CriarFicha("Roger", "Front-End", 25, "São Paulo", "Nenhuma");
dev1.exibirFicha();
console.log("-----------------------");

const dev2 = new CriarFicha2("Pedro", "Front-End", 25, "São Paulo", "JavaScript");
dev2.AumentoSalario(1000);
dev2.exibirFicha();

const dev3 = new FichaGerente("Matheus", "Back-End", 30, "São Paulo");
dev3.exibirFicha();
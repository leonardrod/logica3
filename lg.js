class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          console.log("Tipo de herói inválido");
          return;
      }
  
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplos de uso
  const mago = new Hero("Mago", 25, "mago");
  mago.atacar();
  
  const guerreiro = new Hero("Guerreiro", 30, "guerreiro");
  guerreiro.atacar();
  
  const monge = new Hero("Monge", 20, "monge");
  monge.atacar();
  
  const ninja = new Hero("Ninja", 22, "ninja");
  ninja.atacar();
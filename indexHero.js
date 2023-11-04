class Hero {
    constructor(heroName, age, type) {
        this.heroName = heroName;
        this.age = age;
        this.type = type;
    }

    attack() {
        let ataque;
        switch (this.type) {
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
                ataque = "usou um objeto";
        }
        console.log(`o ${this.type} atacou usando ${ataque}`);
    }
}

const mago = new Hero("Pandora", 20, "mago");
mago.attack();

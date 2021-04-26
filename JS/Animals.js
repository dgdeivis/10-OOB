class Animals {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.sound = "sound";
    }

    voice() {
        console.log(`${this.name} sako ${this.sound}`);
    }

    introduce() {
        console.log(`Esu ${this.name}, mano kailio spalva yra ${this.color} ir moku sakyti ${this.sound}`);
    }
    
}

module.exports = Animals;
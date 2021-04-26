const Bird = require('./Bird.js');

class Dragon extends Bird {
    constructor(name, color) {
        super(name, color);
        this.sound = 'I am a ' + name;
        this.wingsCount = 2;
        this.canFly = true;
        this.imposter = true;
    }
}

module.exports = Dragon;
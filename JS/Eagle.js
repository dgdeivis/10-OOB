const Bird = require('./Bird.js');

class Eagle extends Bird {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Eh eh eh';
        this.wingsCount = 2;
        this.canFly = true;
    }
}

module.exports = Eagle;
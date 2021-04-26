const Animals = require('./Animals.js');

class Fish extends Animals {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Ssss';
        this.canSwim = true;

    }

    swimArray() {
        if (this.canSwim) {
            console.log(`${this.name}: Can swim`);
        } else {
            console.log(`${this.name}: Cannot swim`);
        }
    }

}

module.exports = Fish;
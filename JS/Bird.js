/*
Bird:
- parametrus: name, color, sound, wingsCount, canFly
- metodai: voice, introduce, flyAway
*/

const Animals = require('./Animals.js');

class Bird extends Animals {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Pur pur';
        this.wingsCount = 2;
        this.canFly = true;
    }
    flyAway() {
        if (this.canFly) {
            console.log(`${this.name}: Flew away`);
        } else {
            console.log(`${this.name}: Cannot fly away`);
        }
    }
}

module.exports = Bird;
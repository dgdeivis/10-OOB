const Fish = require('./Fish.js');

class Goldfish extends Fish {
    constructor(name, color) {
        super(name, color);
        this.sound = 'pa pa pa';
        this.canSwim = true;
        this.grantsWishes = true;
    }

    makeWish() {
        if (this.grantsWishes) {
            console.log(`${this.name}: Pildo norus`);
        } else {
            console.log(`${this.name}: Nepildo noru`);
        }
    }

}

module.exports = Goldfish;

const Fish = require('./Fish.js');

class Nemo extends Fish {
    constructor(name, color) {
        super(name, color);
        this.sound = 'I am fish';
        this.canSwim = true;

    }

}

module.exports = Nemo;
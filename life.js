const Dog = require('./js/Dog.js');
const Cat = require('./js/Cat.js');
const Hamster = require('./js/Hamster.js');
const Chicken = require('./js/Chicken.js');
const Parrot = require('./js/Parrot.js');
const Eagle = require('./js/Eagle.js');
const Dragon = require('./js/Dragon.js');
const Goldfish = require('./js/Goldfish.js');
const Nemo = require('./js/Nemo.js');

const rexas = new Dog('Suo', 'rudas');
const rainis = new Cat('Katinas', 'margas');
const keksas = new Hamster('Ziurkenas', 'pilkas');
const cypsius = new Chicken('Visciukas', 'baltas');
const jack = new Parrot('Papuga Jack', 'raudona');

const edis = new Eagle('Eagle', 'juoda');
const draco = new Dragon('Dragon', 'juoda');
const bubble = new Goldfish('Goldfish', 'auksine');
const marlin = new Nemo('Nemo', 'melyna');

rexas.voice();
rexas.introduce();

rainis.voice();
rainis.introduce();

keksas.voice();
keksas.introduce();

cypsius.voice();
cypsius.introduce();
cypsius.flyAway();

jack.voice();
jack.introduce();
jack.flyAway();

edis.voice();
edis.introduce();
edis.flyAway();

draco.voice();
draco.introduce();
draco.flyAway();

bubble.voice();
bubble.introduce();
bubble.makeWish();

marlin.voice();
marlin.introduce();
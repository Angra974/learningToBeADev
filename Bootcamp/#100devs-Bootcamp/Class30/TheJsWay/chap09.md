# The Js Way

###### for the assignment, read the book :)

[The Js Way: chap 09](https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md)

## Coding time : Dogs

```Javascript

// class Dog
class Dog {
    name = "";
    size = 0;species = "";

    constructor(name, size, species) {
	    (this.name = name), (this.size = size), (this.species = species);
    }

    bark() {
        return this.size > 60 ? `Grrr! Grrr!` : `Woof! Woof!`;
    }
}


const fang = new Dog("Fang", "boarhound", 75);
console.log(
    `${fang.name} is a ${fang.species} dog measuring ${fang.size}`
);

console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

```

### Coding time : Character inventory

```Javascript
class Character {
    constructor(name, health, strength, gold= 10, key= 1) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0; // XP is always zero for new characters
        this.inventory = {
            gold: gold,
            key: key
        }
    }
    // Attack a target
    attack(target) {
        if (this.health > 0) {
            const damage = this.strength;
            console.log(
                `${this.name} attacks ${target.name} and causes ${damage} damage points`
            );
            target.health -= damage;

        if (target.health > 0) {
            console.log(`${target.name} has ${target.health} health points left`);
            } else {
                target.health = 0;
                const bonusXP = 10;
                console.log(
                    `${this .name} eliminated ${target.name} and wins ${bonusXP} experience points`
                );
            this.xp += bonusXP;
            }
        } else {
            console.log(`${this.name} can't attack (they've been eliminated)`);
        }
    }
    // Return the character description
    describe() {
        return `${this.name} has ${this.health} health points, ${this .strength} as strength and ${this.xp} XP points, ${this.inventory.gold} golds
        and ${this.invertory.key} key${this.invertory.key === 1? '' : s}.`;
    }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());
```

### Coding Time: Account list

```Javascript
class Account {
    name = "";
    balance = 0;

    constructor(name, balanceValue) {
        this.name = name;
        this.balance = balanceValue;
    }

    credit(value) {
        this.balance += value;
    }

    describe() {
        return this.balance;
    }
}
```

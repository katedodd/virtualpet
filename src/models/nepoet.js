export class Nepoet {

    constructor(name, species, age, color, health, hunger, lastFed, img) {
        this._name = name;
        this._species = species;
        this._age = age;
        this._color = color;
        this._health = health;
        this._hunger = hunger;
        this._lastFed = lastFed;
        this._img = img;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get species() {
        return this._species;
    }

    set species(value) {
        this._species = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get health() {
        return this._health;
    }

    set health(value) {
        this._health = value;
    }

    get hunger() {
        return this._hunger;
    }

    set hunger(value) {
        this._hunger = value;
    }

    get lastFed() {
        return this._lastFed;
    }

    set lastFed(value) {
        this._lastFed = value;
    }

    get img() {
        return this._img;
    }

    set img(value) {
        this._img = value;
    }

    lastFedDateDisplay() {
        return (this._lastFed.getMonth() + 1) + "/" + this._lastFed.getDate() + "/" + this._lastFed.getFullYear();
    }

    lastFedTimeDisplay() {
        return this._lastFed.getHours() + ":" + this._lastFed.getMinutes() + ":" + this._lastFed.getSeconds();
    }

    feed(food) {
        this._hunger += food.getFoodValue();
        this._lastFed = new Date();
        this.becomeHungry(5);
    }

    becomeHungry(interval) {
        interval *= 1000;
        setInterval(() => {
            this._hunger += (Math.floor(-1 * ((new Date()).getTime() - this._lastFed)/interval));
        }, interval);
    }

    assessMood() {
        if (this.hunger < 30 || this.health < 30) {
            return "sad";
        }
        else return "";
    }
}

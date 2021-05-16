export class User {
    constructor(firstName, lastName, birthday, money) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthday = birthday;
        this._money = money;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get birthday() {
        return this._birthday;
    }

    set birthday(value) {
        this._birthday = value;
    }

    get money() {
        return this._money;
    }

    set money(value) {
        this._money = value;
    }
}

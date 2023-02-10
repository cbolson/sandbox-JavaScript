class Greeter {
  name = "unnamed";
  static greetWord = "hello";
  constructor({ name }) {
    this.name = name;
  }

  sayHi() {
    return `${Greeter.greetWord}, I'm ${this.name}`;
  }
}
class User extends Greeter {
  constructor({ name, surname }) {
    super({ name });
    this.surname = surname;
  }
  sayHi() {
    return `${super.sayHi()} ${this.surname}`;
  }
}

const me = new User({ name: "Chris", surname: "Bolson" });
console.log(me.sayHi());
Greeter.greetWord = "Hola";
console.log(me.sayHi());

// Singleton Pattern

// Using Object Literals
const Config = {
  start: () => console.log("App started"),
  end: () => console.log("App ended"),
};

Object.freeze(Config);

Config.start();
Config.end();

Config.name = "New User";
console.log(Config);

// Using class
class Config2 {
  start() {
    console.log("App Started");
  }

  end() {
    console.log("App Ended");
  }
}

const instance = new Config2();
Object.freeze(instance);

instance.name = "New User";
console.log(instance);

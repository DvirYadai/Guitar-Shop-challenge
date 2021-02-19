function ClassicGuitar(manufactureYear, brand, price) {
  this.manufactureYear = manufactureYear;
  this.brand = brand;
  this.price = price;
  this.numberOfString = 6;
  this.used = false;
  this.play = function () {
    if (!used) this.price = this.price - (this.price * 10) / 100;
    this.used = true;
    return "🎶🎶🎶";
  };
}

ClassicGuitar.prototype.getManufactureYear = function () {
  return this.manufactureYear;
};

ClassicGuitar.prototype.getBrand = function () {
  return this.brand;
};

ClassicGuitar.prototype.getPrice = function () {
  return this.price;
};

ClassicGuitar.prototype.setPrice = function (newPrice) {
  this.price = newPrice;
};

ClassicGuitar.prototype.detectSound = function (symbol) {
  if (symbol === "🎸") {
    return "ElectricGuitar";
  } else if (symbol === "🔊") {
    return "BassGuitar";
  } else return "not an Electric or Bass guitar";
};

function ElectricGuitar(manufactureYear, brand, price, longNeck) {
  ClassicGuitar.call(this, manufactureYear, brand, price);
  this.longNeck = longNeck;
  this.play = function () {
    if (!used) this.price = this.price - (this.price * 10) / 100;
    this.used = true;
    return "🎸🎸🎸";
  };
}
ElectricGuitar.prototype = Object.create(ClassicGuitar.prototype);
Object.defineProperty(ElectricGuitar.prototype, "constructor", {
  value: ElectricGuitar,
  enumerable: false,
  writable: true,
});

function BassGuitar(manufactureYear, brand, price) {
  ClassicGuitar.call(this, manufactureYear, brand, price);
  this.numberOfString = 4;
  this.play = function () {
    if (!this.used) this.price = this.price - (this.price * 10) / 100;
    this.used = true;
    return "🔊🔊🔊";
  };
  this.playSolo = function () {
    const symbalArr = ["💥", "🤘", "🎵", "📢", "💢", "🕺"];
    let string = "";
    let random = Math.floor(Math.random() * 6);
    while (random === 0) {
      random = Math.floor(Math.random() * 6);
    }
    for (let i = 0; i < random; i++) {
      string += symbalArr[Math.floor(Math.random() * 6)];
    }
    return string;
  };
}
BassGuitar.prototype = Object.create(ClassicGuitar.prototype);
Object.defineProperty(BassGuitar.prototype, "constructor", {
  value: BassGuitar,
  enumerable: false,
  writable: true,
});

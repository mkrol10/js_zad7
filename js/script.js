var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var greenElephants = "Zielone słonie";

greenElephants = greenElephants.toUpperCase();

var changeText = text.replace("Papugi", greenElephants);

changeText = changeText.substr(0, changeText.length / 2);

console.log(changeText);
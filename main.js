// alert("Hello world");

let nachricht = "Hallo Welt";
// alert(nachricht);
nachricht = "neuer text";
// alert(nachricht)
console.log(nachricht);
const lnkColor = "#ff0000";
let eine_variable = "test";
console.log("Variable: eine_variable: ", eine_variable);
let highScore = 759944;
console.log("Highscore ist: ", highScore / 20);
let meineNachricht = "test1";
console.log(meineNachricht);
meineNachricht = 'test2';
console.log(meineNachricht);
meineNachricht = `Ein mehr
und ein
ganz langer
text
und aus`;
console.log(meineNachricht);

let isOver18 = true;
console.log("über 18?", isOver18);
let age = 17;
console.log("age über 18", age > 18);

let zahlenListe = [2, 11, 24, 33];
console.log(zahlenListe);

let namensListe = ["Jane", "John"];
console.log(namensListe[1]);

console.log(namensListe.length);
let benutzer = {
    vorname: "Jane",
    nachname: "Doe",
    alter: 28
};
console.log("Benutzer", benutzer.nachname);
benutzer.bestzeit = 200;
console.log(benutzer);
benutzer["bestzeit ever"] = 100;
console.log(benutzer);

// let alter = prompt("Wie alt bist du?");
// console.log("Du bist ", alter, " Jahre alt");
// console.log("Über 18?", alter > 18);

// if (alter > 18) {
//     console.log ("Du darfst hinein...");
// }   else {
//     console.log ("noch nicht 18...");
// }

for(let i = 1; i <= 10; i++) {
    console.log("Wert von i: ", i);
}
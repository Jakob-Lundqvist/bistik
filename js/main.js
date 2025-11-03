document.querySelector("#bi").addEventListener("click", updateInfoboxBi);

function updateInfoboxBi() {
  console.log("update bi");

  document.querySelector(".info-text .placeholder").textContent =
    "PANIK! Eller… vent, nej, måske ikke. Men sandsynligvis ja. " +
    "Hvis du mærker et sviende stik og en pludselig trang til at google 'symptomer på død', så følg disse ekstremt vigtige trin. " +
    "1. Frys! (Ikke fordi det hjælper – men det ser dramatisk ud). " +
    "2. Fjern brodden – helst med et kreditkort. Ikke dit kort, selvfølgelig. Brug din mors. " +
    "3. Skrig. Det gør ikke ondt mindre, men naboerne fortjener at vide, at naturen er mod dig. " +
    "4. Påfør is. Eller en frossen pizza. Begge fungerer. " +
    "5. Fortæl nogen du elsker dem. Bare fordi. Man ved aldrig. ⚠️ ";

  document.querySelector("#efficiency").textContent = `
  💡 Hvis du begynder at hæve som en ballon – ring 112. (Ikke bare fordi det ser sjovt ud. Det er faktisk alvor.)`;

  document.querySelector("#requirement").textContent = `
  
  Bier kan lugte frygt på 17 meters afstand.
  Og panik på 3.
  
  Hvis du læser det her — det er for sent.
  `;
  document.querySelector("h2").innerHTML = "BISTIK  ALERT 🚨";
  document.querySelector("#efficiency").style.backgroundColor = "#fceb94";
  document.querySelector("#requirement").style.backgroundColor = "#ffa680";
}
document.querySelector("#epipen").addEventListener("click", updateInfoboxEpipen);

function updateInfoboxEpipen() {
  console.log("update epipen");

  document.querySelector(".info-text .placeholder").textContent = `

Føler du dig svimmel? Ser du dobbelt? Snakker du i slowmotion?
Der er to muligheder:
A) Du har fået et bistik.
B) Du er bare dramatisk.

Men lad os ikke tage nogen chancer!

Læg dig ned. Helst et sted uden flere bier.

Find din adrenalinpen. (Hvis du ikke har en, så… ups.)

Ring 112 og forklar: "Jeg bliver angrebet af en bi med selvtillid."

Fortæl lægen, at du var modig. Det er vigtigt for statistikken.

`;
  document.querySelector("#efficiency").textContent = `
💡 Bonus-tip: Hvis du er allergisk – start et bi-frit fællesskab.
Kaldes også “Indendørs”.`;

  document.querySelector("#requirement").textContent = `


RING EFTER HJÆLP (ELLER DIN MOR)`;
  document.querySelector("h2").innerHTML = "💉ER DU ALLERGISK?";

  document.querySelector("#efficiency").style.backgroundColor = "#fceb94";
  document.querySelector("#requirement").style.backgroundColor = "#ffa680";
}
document.querySelector("#fly_swatter").addEventListener("click", updateInfoboxFlySwatter);

function updateInfoboxFlySwatter() {
  console.log("update fly swatter");

  document.querySelector(".info-text .placeholder").textContent = `
  
  Bi-verdenen er brutal. Det er dem eller dig.
  Men lad os være ærlige – du har allerede tabt, for bien døde som en martyr.
  
  Bier stikker én gang. Hvepse stikker for sjov.
  
  Bier elsker blomster. Hvepse elsker dine grillpølser og din smerte.
  
  Myrer? De er bare der for at se verden brænde.
  
  Historikere mener, at bier opstod for 100 millioner år siden – udelukkende for at chikanere os i dag.`;

  document.querySelector("#efficiency").textContent = `
  💡 Bonus-tip: Hvis du er allergisk – start et bi-frit fællesskab.
  Kaldes også “Indendørs”.`;

  document.querySelector("#requirement").textContent = `
  
    SE HVEM DER VINDER I BATTLE ROYALE: BI VS MENNESKE
  `;
  document.querySelector("h2").innerHTML = "⚔️ KILL OR BE KILLED";
  document.querySelector("#efficiency").style.backgroundColor = "#fceb94";
  document.querySelector("#requirement").style.backgroundColor = "#ffa680";
}

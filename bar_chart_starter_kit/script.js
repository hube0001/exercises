const list = document.querySelector("ul");
//hiver fat i vores liste fra HTML så de vises på hjemmesiden

const columnArray = [];
//Så vi kan pushe vores værdier ind i

setInterval(generateColumns, 1000);
//Det er mellemrummet mellem hvert søjle der bliver vist. Funktionen, sekunder mellem hvert søjle.

//Funktionen som viser vores søjler
function generateColumns() {
  const value = Math.round(Math.random() * 100);
  //Her skriver vi en variabel ned som giver os nogle random til at indsætte i vores array
  columnArray.push(value);
  //dernæst indsætter vi vores konstant, value, ind i den tomme columnArray for at de bliver vist.

  const li = document.createElement("li");
  //Laver vores lister af søjler om til et element i vores javascript.
  li.style.setProperty("--height", value);
  //kan nu bruge elementet ift vores egne værdier (Der er CSS på elementet)
  list.appendChild(li);
  //Her indsættes vores li ind i appendchild så det ses på vores hjemmeside. Appendchild betyder bare at det bliver vist i HTML'en.
  //Appendchild - li er barnet til forælderen list. så derfor skal man have appendchild for at vise værdierne i HTML

  console.log("columnArray", columnArray);
  if (columnArray.length > 20) {
    columnArray.shift();
    list.removeChild(list.firstELementChild);
  }
  // når længden af vores array er længere end 20, så fjerne vi det første element i arrayet.
  // For at det vises på DOM'en, skal vi have fat i vores querySelector og så removeChild elementet. Dernæst indsætter man bare hvilke child man vil fjerne hvilket er det første child.
}

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];
// Vores data - arrayet med breadcrumb-information som vi skal bruge for at lave funktionen

// Funktion der genererer breadcrumbs HTML
function generateBreadcrumbs(breadcrumbData) {
  // Opretter en <ul> element som skal indeholde alle breadcrumbs som du normalt ville gøre i selve HTML filen
  const ul = document.createElement("ul");

  // Looper gennem hvert element i vores breadcrumb data
  breadcrumbData.forEach((item, index) => {
    // Opretter et <li> element for hvert breadcrumb
    const li = document.createElement("li");

    // Tjekker om dette er det SIDSTE element i arrayet
    // index tæller fra 0, så sidste element har index = length - 1
    if (index === breadcrumbData.length - 1) {
      // Dette er det sidste element - lav kun tekst, IKKE et link
      li.textContent = item.name;
    } else {
      // Dette er IKKE det sidste element - lav et link
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.name;

      // Tilføjer linket til li-elementet
      li.appendChild(a);
    }

    // Tilføjer li-elementet til vores ul
    ul.appendChild(li);
  });

  // Returner den færdige <ul> med alle breadcrumbs
  return ul;
}

// Funktion der viser breadcrumbs på siden
function displayBreadcrumbs() {
  // Finder vores nav-container
  const container = document.getElementById("breadcrumb-container");
  const h1 = document.querySelector("h1"); // Finder h1 elementet
  const button = document.getElementById("generate-btn");

  // Rydder containeren (hvis der allerede er noget indhold)
  container.innerHTML = "";

  // Genererer breadcrumbs og tilføjer dem til containeren
  const breadcrumbs = generateBreadcrumbs(bc);
  container.appendChild(breadcrumbs);

  container.classList.add("active");
  h1.classList.add("breadcrumbs-active");
  button.classList.add("breadcrumbs-active");
}

// Finder knappen
const button = document.getElementById("generate-btn");

// Tilføjer en event listener til knappen
// Når brugeren klikker, kaldes displayBreadcrumbs funktionen
button.addEventListener("click", displayBreadcrumbs);

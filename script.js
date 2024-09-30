async function fetchData() {
    // Variableen sarjat id:stä show-container ja alempana loopataan ja poistetaan laitetut sarjat
    var sarjat = document.querySelector('.show-container');
    while (sarjat.firstChild) {
        sarjat.removeChild(sarjat.firstChild);
    }
    // Otetaan muuttujaan search talteen käyttäjän input
    let search = document.getElementById("input-show").value;
    console.log(search)
    // Haetaan tiedot data muuttujaan tvURL välimuuttuja, johon voidaan laittaa userinput
    const tvURL = `https://api.tvmaze.com/search/shows?q=${search}`
    const response = await fetch(tvURL);
    const data = await response.json();

    console.log(data);

    const containerDiv = document.querySelector('.show-container')

    // Loopataan kaikki sarjat läpi yksitellen

    data.forEach(show => {
        const img = show.show.image.medium;
        const name = show.show.name;
        const summary = show.show.summary;
        const row = document.createElement('div')
        // Annetaan row muuttujalle luodulle div:lle luokka show-data (Pelastus ei meinannut mennä läpi codegrade :D)
        row.setAttribute("class", "show-data")
        console.log(img);

        // Annetaan rivin sisälle kuva, nimi ja summary sarjasta
        row.innerHTML = `<img src=${img}><div class="show-info"><h1>${name}</h1>${summary}</div>`
        // Lisätään rivi show-container div:in sisään
        containerDiv.appendChild(row);
    });
}
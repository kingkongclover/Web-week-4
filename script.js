async function fetchData() {
    var sarjat = document.querySelector('.show-container');
    while (sarjat.firstChild) {
        sarjat.removeChild(sarjat.firstChild);
    }
    // Haetaan tiedot data muuttujaan
    let search = document.getElementById("input-show").value;
    console.log(search)
    const tvURL = `https://api.tvmaze.com/search/shows?q=${search}`
    const response = await fetch(tvURL);
    const data = await response.json();

    console.log(data);

    const containerDiv = document.querySelector('.show-container')

    data.forEach(show => {
        const img = show.show.image.medium;
        const name = show.show.name;
        const summary = show.show.summary;
        const row = document.createElement('div')
        row.classList.add('show-data')
        console.log(img);


        row.innerHTML = `<img src=${img}><div class="show-info"><h1>${name}</h1>${summary}</div>`

        containerDiv.appendChild(row);
    });
}
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('query');
    const searchUrl='https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=76e4ead69f47ca43f4dd5712489b95d4&query='+searchTerm;
    resDis(searchUrl);
}
async function resDis(seU){
    const response = await fetch (seU);
    const json =  await response.json()
    const output= json['results'][0];
    const title = output['original_title'];
    const rd=output['release_date'];
    const poster='http://image.tmdb.org/t/p/w500'+output['poster_path']
    resultsContainer.innerHTML = ''; // Clears everything from the page
    const movieCard = `<h2 class="title" style="color:white; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">${title}</h2>
                        <p class="deets" style="color:white; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Release Date: ${rd}</p>
                        <img src="${poster}" width=300 height=400>`
    resultsContainer.innerHTML += movieCard;
    document.body.appendChild(resultsContainer); }
const sb = document.querySelector('.movcon');
const scca=400;
function ml(){
    sb.scrollBy({left:-scca, behavior:"smooth"});
}
function mr(){
    sb.scrollBy({left:scca, behavior:"smooth"});
}
window.onload = function(){
    fetchmov();
}
function fetchmov(){
    const apikey='76e4ead69f47ca43f4dd5712489b95d4';
    const apiurl='https://api.themoviedb.org/3/movie/157336?api_key=76e4ead69f47ca43f4dd5712489b95d4';

}

const searchInput=document.getElementById('serInp');
const searchButton=document.getElementById('serBtn');
searchButton.addEventListener('click', async function(){
    const searchTerm = searchInput.value;
    const searchUrl='https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=76e4ead69f47ca43f4dd5712489b95d4&query='+searchTerm;
    window.location.href='searchresults.html?query=' + encodeURIComponent(searchTerm);
    window.onload = function() {
        resDis(searchUrl);
    }
    
})
async function resDis(searchUrl){
    const response = await fetch (searchUrl);
    const json =  await response.json()
    const output= json['results'][0];
    const title = output['original_title'];
    const rd=output['release_date'];
    resultsContainer.innerHTML = ''; // Clears everything from the page
    const movieCard = `<h2 class="title" style="color:white">${title}</h2>
                        <p class="deets" style="color:white">Release Date: ${rd}</p>`
    resultsContainer.innerHTML += movieCard;
    document.body.appendChild(resultsContainer); }
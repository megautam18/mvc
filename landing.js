const sb = document.querySelector('.movcon');
const scca=300;
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
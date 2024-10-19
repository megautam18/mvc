const sb = document.querySelector('.movcon');
const scca=300;
function ml(){
    sb.scrollBy({left:-scca, behavior:"smooth"});
}
function mr(){
    sb.scrollBy({left:scca, behavior:"smooth"});
}
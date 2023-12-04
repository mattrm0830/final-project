class Movie{
    constructor(title, genre, rating, image, link){
        this.title = title;
        this.genre = genre;
        this.rating = rating;
        this.image = image;
        this.link = link
    }
}
var movieList = [];
movieList.push(new Movie("The Dark Knight",["Action","Crime"],4.3,"images/dark.jpg","https://www.imdb.com/title/tt0468569/"));
movieList.push(new Movie("The Shawshank Redemption",["Drama"], 4.8,"images/shawshank.jpg", "https://www.imdb.com/title/tt0111161/"));
movieList.push(new Movie("The Silence of The Lambs",["Horror", "Crime", "Drama"],4.6,"images/Lambs.jpg","https://www.imdb.com/title/tt0102926/"));
movieList.push(new Movie("Goodfellas",["Crime", "Drama"], 4.4,"images/goodfellas.jpg", "https://www.imdb.com/title/tt0099685/"));
movieList.push(new Movie("Casino Royale",["Action","Adventure"],4.4,"images/casino.jpg","https://www.imdb.com/title/tt0381061/"));
movieList.push(new Movie("Pulp Fiction", ["Crime", "Drama"],4.7,"images/pulp.jpg", "https://www.imdb.com/title/tt0110912/"));
movieList.push(new Movie("The Godfather", ["Crime", "Drama"], 4.9, "images/godfather.jpg", "https://www.imdb.com/title/tt0068646/"));
movieList.push(new Movie("Whiplash",["Drama", "Music"], 5.0, "images/whiplash.jpg","https://www.imdb.com/title/tt2582802/"));
movieList.push(new Movie("Catch Me if You Can",["Biography", "Crime", "Drama"],4.5,"images/catchme.jpg","https://www.imdb.com/title/tt0264464/"));
movieList.push(new Movie("The Imitation Game",["History", "Drama"],4.6,"images/imitation.jpg","https://www.imdb.com/title/tt2084970/"));
movieList.push(new Movie("The Big Lebowski",["Comedy","Crime"],3.7,"images/lebow.jpg","https://www.imdb.com/title/tt0118715/"));
movieList.push(new Movie("Superbad", ["Comedy"], 3.7,"images/superbad.jpg","https://www.imdb.com/title/tt0829482/"));
movieList.push(new Movie("Uncut Gems",["Crime", "Drama"], 4.1, "images/uncut.jpg", "https://www.imdb.com/title/tt5727208/"));
movieList.push(new Movie("Up In the Air",["Romantic", "Comedy", "Drama"], 3.9, "images/upin.jpg", "https://www.imdb.com/title/tt1193138/"));
movieList.push(new Movie("The Grey Man", ["Action", "Crime"], 3.5, "images/grey.jpg", "https://www.imdb.com/title/tt1649418/"));
movieList.push(new Movie("Hustle", ["Comedy", "Drama", "Sports"], 3.8, "images/hustle.jpg", "https://www.imdb.com/title/tt8009428/"));
movieList.push(new Movie("La La Land", ["Comedy", "Romantic", "Drama"],4.5, "images/lala.jpg", "https://www.imdb.com/title/tt3783958/"));
movieList.push(new Movie("Scarface", ["Crime", "Action"],3.4,"images/scarface.jpg","https://www.imdb.com/title/tt0086250/"));
movieList.push(new Movie("A Man Called Otto",["Drama", "Comedy"],3.6,"images/aman.jpg","https://www.imdb.com/title/tt7405458/"));
movieList.push(new Movie("The Irish Man", ["Biography","Crime", "Drama"], 4.2, "images/irish.jpg","https://www.imdb.com/title/tt1302006/"));
movieList.push(new Movie("Knives Out: The Glass Onion",["Comedy", "Crime"],3.6, "images/glass.jpg","https://www.imdb.com/title/tt11564570/"));
movieList.push(new Movie("Emily the Criminal",["Crime", "Drama"], 3.5, "images/emily.jpg","https://www.imdb.com/title/tt15255876/"));
movieList.push(new Movie("Focus",["Comedy","Crime","Romantic"],3.2,"images/focus.jpg","https://www.imdb.com/title/tt2381941/"));
movieList.push(new Movie("Good Will Hunting", ["Drama"],4.4,"images/goodwill.jpg","https://imdb.com/title/tt0119217/"));
movieList.push(new Movie("Fargo", ["Crime","Thriller"],3.9,"images/fargo.jpg","https://www.imdb.com/title/tt0116282/"));
movieList.push(new Movie("Elvis", ["Biography","Drama"],3.6,"images/elvis.jpg","https://www.imdb.com/title/tt3704428/"));
movieList.push(new Movie("Parasite", ["Drama", "Crime"], 4.6,"images/parasite.jpg", "https://www.imdb.com/title/tt6751668/"));
movieList.push(new Movie("Amsterdam",["History", "Drama"],3.2,"images/amster.jpg","https://www.imdb.com/title/tt10304142/"));
movieList.push(new Movie("The Banshees of Inisherin", ["Drama","Comedy"],4.0,"images/banshees.jpg","https://www.imdb.com/title/tt11813216/"));
movieList.push(new Movie("Training Day",["Comedy","Action"],3.7,"images/training.jpg","https://www.imdb.com/title/tt0139654/"));
movieList.push(new Movie("Top Gun: Maverick",["Action", "Drama"],3.9,"images/topgun.jpg","https://www.imdb.com/title/tt1745960/"));
movieList.push(new Movie("Leon the Professional",["Action","Drama"],4.2,"images/leon.jpg","https://www.imdb.com/title/tt0110413/"));
movieList.push(new Movie("The Departed",["Crime","Drama","Action"],4.7,"images/departed.jpg","https://www.imdb.com/title/tt0407887/"));
movieList.push(new Movie("Inglorious Basterds",["Crime","Drama"],4.5,"images/inglorious.jpg","https://www.imdb.com/title/tt0361748/"));
movieList.push(new Movie("Kill Bill: Volume 1",["Action"],4.1,"images/killbill.jpg","https://www.imdb.com/title/tt0266697/"));
movieList.push(new Movie("The Grand Budapest Hotel", ["Adventure","Comedy"],3.9,"images/grand.jpg", "https://www.imdb.com/title/tt2278388/"));
movieList.push(new Movie("The Intouchables",["Comedy","Drama"],4.8,"images/intouchables.jpg","https://www.imdb.com/title/tt1675434/"));
var numSelected = 0;
function compare(a,b){
    return b.rating - a.rating;
}
movieList.sort(compare);
var selected = [];
var s = false;
document.getElementById("btn").addEventListener('click', function (){
    if(s == false){
         document.querySelector(".dropdown-content").style.display = "block";
         s = true
    }
    else {
        s = false;
        document.querySelector(".dropdown-content").style.display = "none";
    }
    console.log("hello");
});
function selectOption(value){
    console.log(value);
    var found = false;
    for(var i = 0; i<selected.length; ++i){
        if(value == selected[i]){
            selected = selected.filter(element => element !== value);
            document.getElementById(value).style.display = "none";
            document.querySelector('.' +value).style.backgroundColor = "#f1f1f1";
            found = true;
            --numSelected;
        }
    }
    if(found == false && numSelected <3 ){
        ++numSelected;
        document.getElementById(value).style.display = "block"
        selected.push(value);
        document.querySelector('.' +value).style.backgroundColor = "#cecece";
    }
}
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        if(s == true){
            s = false;
            document.querySelector(".dropdown-content").style.display = "none";
        }
    }
}
function match(){
    var outputContainer = document.getElementById("output");
    outputContainer.innerHTML = "";
    if(selected.length == 0){
        document.querySelector('message').innerHTML = "Please Select At Least One Option."
    }
    for(var i = 0; i<movieList.length; i++){
        console.log(movieList[i].title + " "+ movieList[i].genre.length);
        var numMatches = 0;
        for(var j =0; j<selected.length; ++j){
            if (movieList[i].genre.includes(selected[j])) ++numMatches;
        }
        if(numMatches==selected.length){
            outputContainer.innerHTML += "<li>" + "<h3> "+movieList[i].title + "</h3>"+
             "<h3> "+movieList[i].rating +"/5.0 </h3>"
           + "<a href = \""+movieList[i].link + "\">"
            + "<img src = \"" +movieList[i].image+ "\" alt = \"" + movieList[i].title +"\" poster /></a></li>";
        }    
        console.log(outputContainer.innerHTML)
    }

}
fetch("https://jsonplaceholder.typicode.com/photos").then(function (res) {
    console.log(res.status);
    if(res.status===200)
     return res.json();
}).then(function (res) {
    var navBar = document.getElementsByClassName("ListWithFilms")[0];
    images = res.slice(0,50);
    images.forEach(function (obj,i) {
        let div = document.createElement("div");
        let image = document.createElement("img");
        let aHref = document.createElement("a");
        div.className="FilmItem";
        image.className= "FilmItem-image";
        aHref.className="FilmItem-linkFilm";
        image.src=obj.thumbnailUrl;
        aHref.innerText = obj.title;
        div.appendChild(image);
        div.appendChild(aHref);

        let lItem = document.createElement("li");
        lItem.appendChild(div);
        navBar.appendChild(lItem);

    })
});
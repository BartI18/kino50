fetch("https://jsonplaceholder.typicode.com/photos").then(function (res) {
    console.log(res.status);
    if (res.status === 200)
        return res.json();
}).then(function (res) {
    var navBar = document.querySelector(".ListWithFilms");
    const amountElements = 50;
    images = res.slice(0, amountElements);
    images.forEach(function (obj, i) {
        let filmItem = document.querySelector(".FilmItem");
        let image = filmItem.content.querySelector(".FilmItem-image");
        filmItem.content.querySelector(".FilmItem-linkFilm").innerText = obj.title;
        image.src = obj.thumbnailUrl;
        filmItem.onclick = function () {
            image.src = obj.url;
        };
        navBar.appendChild(filmItem.content.cloneNode(true));
    })
});
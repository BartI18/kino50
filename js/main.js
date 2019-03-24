fetch("https://jsonplaceholder.typicode.com/photos").then(function (res) {
    console.log(res.status);
    return res.json();
}).then(function (res) {
    images = res.slice(0,29);
    images.forEach(function (obj,i) {
        let image = document.getElementById("FilmImage"+i);
        image.src = obj.thumbnailUrl;
        image.addEventListener("click",function () {
            image.src=obj.url;
        });
        console.log(obj);
        document.getElementById("FilmLink"+i).innerText=obj.title;
    })
});
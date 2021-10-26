const container = document.querySelector(".container");
const coffees = [{
        name: "Rick Sanchez",
        Image: "images/rick.jpg"
    },
    {
        name: "Morty Smith",
        Image: "images/morty.jpeg"
    },
    {
        name: "Summer Smith",
        Image: "images/summer.jpg"
    },
    {
        name: "Squanchy",
        Image: "images/Squanchy.jpg"
    },
    {
        name: "Bird Person",
        Image: "images/birdperson.jpg"
    },
    {
        name: "Beth Sanchez",
        Image: "images/beth.png"
    },
    {
        name: "Jerry Smith",
        Image: "images/jerry.jpeg"
    },
    {
        name: "Mr. Poopybutthole",
        Image: "images/popi.png"
    },
    {
        name: "sr meeseeks",
        Image: "images/meeseeks.jpg"
    }
];
const showCoffees = () => {
    let output = "";
    coffees.forEach(
        ({ name, Image }) =>
        (output += `
                        <div class="card">
                            <img class="card--avatar" src=${Image} />
                            <h1 class="card--title">${name}</h1>
                            <a class="card--link" href="#">Taste</a>
                            </div>
                            `)
    );
    container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registrado"))
            .catch(err => console.log("service worker no registrado", err));
    });
}
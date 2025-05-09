document.addEventListener('DOMContentLoaded', function () {
    addItems();
    let del = document.getElementById('del');
    del.addEventListener("click", clear);
});

function addItems() {
    let list = document.getElementById('items');
    const games = JSON.parse(localStorage.getItem("games"));
    let count = 1;
    games.forEach(game => {
        const item = document.createElement('li');
        const img = document.createElement('img');
        const br = document.createElement("br");

        console.log(game.image);
        item.classList.add('boxed');
        item.textContent = `${count}: ${game.title}    `;

        img.setAttribute('src', game.image);
        img.setAttribute('alt', `${game.title} Box Art`)
        img.appendChild(br);
        item.appendChild(img);
        list.appendChild(item);
        count++;
    });
}

function clear() {
    localStorage.clear();
}
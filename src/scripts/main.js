document.addEventListener('DOMContentLoaded', function () {
    addItems();
});

function addItems() {
    let list = document.getElementById('items');
    for (let i = 0; i < 3; i++){
        const item = document.createElement('li');
        item.classList.add('boxed');
        item.textContent = `Item ${i + 1}`;
        list.appendChild(item);
    }
}
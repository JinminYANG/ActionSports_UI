// search container
const searchTeamItems = document.querySelectorAll(".search__team__item");
const searchPositionItems = document.querySelectorAll(".search__position__item");
const searchConsonantsItems = document.querySelectorAll(".search__consonants__item");

function removeActiveClass(items) {
    Array.from(items).forEach((item) => {
        item.classList.remove('active');
    })
}

function addActiveClassEventLists(list) {
    Array.from(list).forEach((item) => {
        item.addEventListener('click', () => {
            removeActiveClass(list);
            item.classList.add("active");
        });
    });
}

addActiveClassEventLists(searchTeamItems);
addActiveClassEventLists(searchPositionItems);
addActiveClassEventLists(searchConsonantsItems);
// search container
const teamItems = document.querySelectorAll(".team__item");

addActiveClassEventLists(teamItems);

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

const positionItems = document.querySelectorAll(".position__item");

addActiveClassEventLists(positionItems);

const consonantsItems = document.querySelectorAll(".consonants__item");
addActiveClassEventLists(consonantsItems);


// bookmark button control
const bookmarkContents = document.querySelector(".bookmark__contents");
let bookmarkItems = bookmarkContents.querySelectorAll(".bookmark__item");
const playersContents = document.querySelector(".players__contents");
let playerItems = playersContents.querySelectorAll(".player__item");


Array.from(playerItems).forEach((item) => {
    const playerItemsBookmarkButtons = item.querySelector(".player__item__bookmark_btn");

    playerItemsBookmarkButtons.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active")
            e.target.parentElement.classList.remove("active")

            const playerName = e.target.closest(".player__item").children[0].children[1].innerText

            Array.from(bookmarkItems).forEach((element) => {
                if (element.children[0].children[1].innerText == playerName) {
                    element.remove();
                }
            })
        } else {
            e.target.classList.add("active")
            e.target.parentElement.classList.add("active")
            const copyItem = item.cloneNode(true)
            bookmarkContents.append(copyItem)
            copyItem.classList.add("bookmark__item");
            bookmarkItems = bookmarkContents.querySelectorAll(".bookmark__item");
        }
    });
});
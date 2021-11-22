// bookmark button control
const bookmarkPlayerList = document.querySelector(".bookmark_player__list");
let bookmarkPlayerItems = bookmarkPlayerList.querySelectorAll(".bookmark_player__item");
const generalPlayersList = document.querySelector(".general_players__list");
let generalplayersItems = generalPlayersList.querySelectorAll(".general_players__item");

Array.from(generalplayersItems).forEach((item) => {
    const playerItemsBookmarkButtons = item.querySelector(".general_players__item__bookmark_btn");

    playerItemsBookmarkButtons.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active");
            e.target.parentElement.classList.remove("active");

            const playerName = e.target.closest(".general_players__item").children[0].children[1].innerText;

            Array.from(bookmarkPlayerItems).forEach((element) => {
                if (element.children[0].children[1].innerText == playerName) {
                    element.remove();
                }
            })
        } else {
            e.target.classList.add("active");
            e.target.parentElement.classList.add("active");
            const copyItem = item.cloneNode(true);
            bookmarkPlayerList.append(copyItem);
            copyItem.classList.add("bookmark_player__item");
            bookmarkPlayerItems = bookmarkPlayerList.querySelectorAll(".bookmark_player__item");
        }
    });
});
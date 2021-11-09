// side setting Control
const sideSettingControlBtns = document.querySelectorAll('.controls__item');
Array.from(sideSettingControlBtns).forEach((button) => {
    button.addEventListener('click', () => {
        hideAllShadowEffect(button);
        displayShadowEffect(button);

        hideSettingItem();
        displaySettingItem(button);
    });
});

function displayShadowEffect(button) {
    return button.classList.add('active');
}

function hideAllShadowEffect(button) {
    const items = button.parentElement.children;
    Array.from(items).forEach((btn) => {
        btn.classList.remove('active');
    });

    return;
}

function displaySettingItem(button) {
    if (button.classList.contains('controls__effects')) {
        return document.querySelector('#effects').classList.add('active');
    } else if (button.classList.contains('controls__prediction')) {
        return document.querySelector('#prediction').classList.add('active');
    } else if (button.classList.contains('controls__player_info')) {
        return document.querySelector('#playerInfo').classList.add('active');
    } else {
        return;
    }
}

function hideSettingItem() {
    Array.from(document.querySelectorAll('.setting')).forEach((elem) => {
        elem.classList.remove('active');
    });

    return;
}




// LiveChatRoom control
const liveChatRoomControlBtn = document.querySelector(".chatting__header__toggle");

liveChatRoomControlBtn.addEventListener("click", () => {
    toggleBtn(liveChatRoomControlBtn);
});

function toggleBtn(button) {
    if (button.classList.contains("down")) {
        button.classList.remove("down");
        button.classList.add("up");
        return;
    } else {
        button.classList.remove("up");
        button.classList.add("down");
        return;
    }
}




// streamingBottomItem control
const streamingBottomItem = document.querySelectorAll(".streaming__bottom__item");
Array.from(streamingBottomItem).forEach((button) => {
    button.addEventListener('click', () => {
        toggleActive(button);
    });
});

function toggleActive(button) {
    if (button.classList.contains("active")) {
        return button.classList.remove("active");
    } else {
        return button.classList.add("active");
    }
}

const statsBtnItem = document.querySelectorAll(".stats__btns__item");
Array.from(statsBtnItem).forEach((button) => {
    button.addEventListener('click', () => {
        toggleActive(button);
    });
});




// share link copy icon
const copyText = document.querySelector(".share_modal__link__text")
const copyIcon = document.querySelector(".share_modal__link__btn__icon")

copyIcon.addEventListener('click', (e) => {
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    copyIcon.classList.replace("bi-stickies", "bi-stickies-fill")

    setTimeout(function() {
        copyIcon.classList.replace("bi-stickies-fill", "bi-stickies")
    }, 5000);
});


// 로그인 모달
const loginModal = document.querySelector('.login_modal');
const loginModalOpenButton = document.querySelector('#loginModalOpenButton');
loginModalOpenButton.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

const loginButton = loginModal.querySelector("#loginModalLoginButton");
const closeButton = loginModal.querySelector("#loginModalCloseButton");
closeButton.addEventListener('click', (e) => {
    loginModal.style.display = 'none';
})
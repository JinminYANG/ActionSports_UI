// side setting Control
const sideSettingControlBtns = document.querySelectorAll('.controls__item');
Array.from(sideSettingControlBtns).forEach((button) => {
    button.addEventListener('click', () => {
        activeSideSettingControlBtns(button);
        activeSettingItem(button);
    });
});

function activeSideSettingControlBtns(button) {
    const items = button.parentElement.children;
    return Array.from(items).forEach((btn) => {
        (button == btn) ? btn.classList.add('active'): btn.classList.remove('active');
    });
}

function activeSettingItem(button) {
    const settings = document.querySelectorAll(".setting");

    if (button.classList.contains('controls__effects')) {
        return Array.from(settings).forEach((item) => {
            item.classList.contains('effects') ? item.classList.add('active') : item.classList.remove('active');
        });
    } else if (button.classList.contains('controls__prediction')) {
        return Array.from(settings).forEach((item) => {
            item.classList.contains('prediction') ? item.classList.add('active') : item.classList.remove('active');
        });
    } else if (button.classList.contains('controls__player_info')) {
        return Array.from(settings).forEach((item) => {
            item.classList.contains('player_info') ? item.classList.add('active') : item.classList.remove('active');
        });
    }
}


// all select effects setting button
const settingAllButtons = document.querySelectorAll(".setting__all__button");

Array.from(settingAllButtons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.classList.contains('effects__all__button')) {
            const effectsItemButtons = document.querySelectorAll(".effects__item__button");
            return (e.target.checked) ? checkedSettingAllButtons(e.target, effectsItemButtons) : uncheckedSettingAllButtons(e.target, effectsItemButtons);
        } else if (e.target.classList.contains('prediction__all__button')) {
            const predictionItemButtons = document.querySelectorAll(".prediction__item__button");
            return (e.target.checked) ? checkedSettingAllButtons(e.target, predictionItemButtons) : uncheckedSettingAllButtons(e.target, predictionItemButtons);
        } else if (e.target.classList.contains('player_info__all__button')) {
            const playerInfoItemButtons = document.querySelectorAll(".player_info__item__button");
            return (e.target.checked) ? checkedSettingAllButtons(e.target, playerInfoItemButtons) : uncheckedSettingAllButtons(e.target, playerInfoItemButtons);
        }
    })
});

function checkedSettingAllButtons(allButton, buttons) {
    Array.from(allButton.labels).forEach((elem) => {
        elem.classList.add("active");
        elem.innerText = "ON";
    });

    Array.from(buttons).forEach((elem) => {
        elem.setAttribute("checked", "checked");
    });
}

function uncheckedSettingAllButtons(allButton, buttons) {
    Array.from(allButton.labels).forEach((elem) => {
        elem.classList.remove("active");
        elem.innerText = "OFF";
    });

    Array.from(buttons).forEach((elem) => {
        elem.removeAttribute("checked");
    });
}


// LiveChatRoom control
const liveChatRoomControlBtn = document.querySelector(".chatting__header__toggle");

liveChatRoomControlBtn.addEventListener("click", () => {
    return toggleActiveElement(liveChatRoomControlBtn);
});

function toggleActiveElement(element) {
    return (!element.classList.contains("active")) ? element.classList.add("active") : element.classList.remove("active");
}


// streamingSummaryServiceButtons control
const streamingBottomItem = document.querySelectorAll(".streaming__summary__service__button");
Array.from(streamingBottomItem).forEach((button) => {
    button.addEventListener('click', () => {
        return toggleActiveElement(button);
    });
});


// statsBtnItem control
const statsBtnItem = document.querySelectorAll(".stats__buttons__item");
Array.from(statsBtnItem).forEach((button) => {
    button.addEventListener('click', () => {
        return toggleActiveElement(button);
    });
});



// share link copy icon
const modalCopyText = document.querySelector(".share_modal__link__text")
const modalCopyIcon = document.querySelector(".share_modal__link__copy_button")

modalCopyIcon.addEventListener('click', (e) => {
    modalCopyText.select();
    navigator.clipboard.writeText(modalCopyText.value);
});


// 로그인 모달
const loginModal = document.querySelector('.chatting__login_modal');
const loginModalOpenButton = document.querySelector('#loginModalOpenButton');
loginModalOpenButton.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

const loginButton = loginModal.querySelector("#loginModalLoginButton");
const closeButton = loginModal.querySelector("#loginModalCloseButton");
closeButton.addEventListener('click', (e) => {
    loginModal.style.display = 'none';
})
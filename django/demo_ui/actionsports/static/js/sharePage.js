function initKaKaoAPI() {
    try {
        if (Kakao) {
            return Kakao.init('9883dae230e0918c132036d0ca4612e0');
        };
    } catch (e) {
        return console.error(e);
    };
}

function shareKakaotalk() {
    return Kakao.Link.sendCustom({
        templateId: 65846
    });
}

function shareKakaoStoryWeb() {
    return Kakao.Story.share({
        // url: 'https://developers.kakao.com',
        url: window.location.href,
        text: 'ActionSports와 함께하는 스포츠 즐기기!',
    });
}

function shareFacebook() {
    // const url = 'https://action_sports.co.kr/action_live';
    const url = 'https://sports.news.naver.com/news?oid=076&aid=0003805817';
    const encodeUrl = encodeURIComponent(url);
    const facebook = 'https://www.facebook.com/sharer/sharer.php?u=';
    const link = facebook + encodeUrl;

    return window.open(link, "_blank", "width=600,height=400");
}

function shareTwitter() {
    const sendText = "ActionSports";
    const url = window.location.href;
    const encodeUrl = encodeURIComponent(url);

    return window.open('https://twitter.com/intent/tweet?text=' + sendText + '&url=' + encodeUrl, "_blank", "width=600,height=400");
}

initKaKaoAPI();

const shareModalKakaotalk = document.querySelector(".share_modal__kakaotalk");
shareModalKakaotalk.addEventListener('click', () => {
    return shareKakaotalk();
})

const shareModalKakaostory = document.querySelector(".share_modal__kakaostory");
shareModalKakaostory.addEventListener('click', () => {
    return shareKakaoStoryWeb();
})

const shareModalFacebook = document.querySelector(".share_modal__facebook");
shareModalFacebook.addEventListener('click', () => {
    return shareFacebook();
});

const shareModalTwitter = document.querySelector(".share_modal__twitter");
shareModalTwitter.addEventListener('click', () => {
    return shareTwitter();
});
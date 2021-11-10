// streaming controls
const videoPlayer = document.querySelector(".streaming__item")
const video = videoPlayer.querySelector(".streaming__item__video")
const playButton = videoPlayer.querySelector('.play_button')

// new
// preferences
const settingButton = videoPlayer.querySelector(".setting_button")
const preferences = videoPlayer.querySelector(".preferences");
const preferencesPlaybackSpeedText = preferences.querySelector(".playback_speed__text");

settingButton.addEventListener("click", (e) => {
    if (preferences.classList.contains("active")) {
        preferences.classList.remove("active");
        resolutionSetting.classList.remove("active");
    } else {
        preferences.classList.add("active");
        resolutionSetting.classList.remove("active");
    }
})

// preferences__resolution
const resolutionButton = videoPlayer.querySelector(".resolution");
const resolutionSetting = videoPlayer.querySelector(".resolution__setting");
const resolutionSettingPreviousButton = resolutionSetting.querySelector(".resolution__setting__previous");

resolutionButton.addEventListener('click', () => {
    if (resolutionSetting.classList.contains("active")) {
        resolutionSetting.classList.remove("active");
        preferences.classList.add("active");
    } else {
        resolutionSetting.classList.add("active");
        preferences.classList.remove("active");
    }
})

resolutionSettingPreviousButton.addEventListener('click', () => {
    resolutionSetting.classList.remove("active");
    preferences.classList.add("active");
})

// preferences__playback_speed
const playbackSpeedButton = videoPlayer.querySelector(".playback_speed");
const playbackSpeedSetting = videoPlayer.querySelector(".playback_speed__setting");
const playbackSpeedSettingPreviousButton = playbackSpeedSetting.querySelector(".playback_speed__setting__previous");
const playbackSpeedSettingItem = playbackSpeedSetting.querySelectorAll(".playback_speed__setting__item");

playbackSpeedButton.addEventListener('click', () => {
    if (resolutionSetting.classList.contains("active")) {
        playbackSpeedSetting.classList.remove("active");
        preferences.classList.add("active");
    } else {
        playbackSpeedSetting.classList.add("active");
        preferences.classList.remove("active");
    }
})

playbackSpeedSettingPreviousButton.addEventListener('click', () => {
    playbackSpeedSetting.classList.remove("active");
    preferences.classList.add("active");
})

Array.from(playbackSpeedSettingItem).forEach((button) => {
    button.addEventListener('click', () => {
        video.playbackRate = button.value;
        playbackSpeedSetting.classList.remove("active");
        preferences.classList.add("active");
        removeActiveAll(playbackSpeedSettingItem);
        button.classList.add("active");
        preferencesPlaybackSpeedText.innerText = button.innerHTML;
    });
});

function removeActiveAll(items) {
    Array.from(items).forEach((item) => {
        item.classList.remove("active");
    });
}


// full screen
const fullScreenButton = videoPlayer.querySelector(".full_screen_button");

fullScreenButton.addEventListener("click", (e) => {
    toggleFullScreen()
})

function isFullScreen() {
    return (document.fullScreenElement && document.fullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null) ||
        (document.mozFullScreen || document.webkitIsFullScreen);
}

function enterFullScreen() {
    const page = videoPlayer
    if (page.requestFullscreen) {
        page.requestFullscreen();
        toggleActive(page);
    } else if (page.mozRequestFullScreen) page.mozRequestFullScreen();
    else if (page.msRequestFullscreen) page.msRequestFullscreen();
    else if (page.webkitRequestFullScreen) page.webkitRequestFullScreen();
}

function exitFullScreen() {
    if (document.exitFullScreen) {
        toggleActive(videoPlayer);
        return document.exitFullScreen();
    } else if (document.webkitExitFullscreen) {
        toggleActive(videoPlayer);
        return document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        toggleActive(videoPlayer);
        return document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        toggleActive(videoPlayer);
        return document.mozCancelFullScreen();
    }
}

function toggleFullScreen() {
    if (!isFullScreen()) {
        enterFullScreen();
    } else {
        exitFullScreen();
    }
}


const videoPlayerCloseButton = videoPlayer.querySelector(".streaming__item__close")

videoPlayerCloseButton.addEventListener("click", (e) => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
        videoPlayer.classList.remove("active");
    }
})

const liveplayItemOverlayIcon = videoPlayer.querySelector(".liveplay__item__overlay_icon")
const liveplayItemOverlayBox = videoPlayer.querySelector(".liveplay__item__overlay__box")


// Play and Pause button
playButton.addEventListener('click', (e) => {
    if (video.paused) {
        video.play();
        e.target.classList.replace("bi-play-fill", "bi-pause-fill")
        liveplayItemOverlayIcon.style.display = "none";
        liveplayItemOverlayBox.style.display = "none";
    } else {
        video.pause();
        e.target.classList.replace("bi-pause-fill", "bi-play-fill")
        liveplayItemOverlayIcon.style.display = "block";
        liveplayItemOverlayBox.style.display = "block";
    }
})

video.addEventListener("click", (e) => {
    if (video.paused) {
        video.play();
        playButton.children[0].classList.replace("bi-play-fill", "bi-pause-fill");
        liveplayItemOverlayIcon.style.display = "none";
        liveplayItemOverlayBox.style.display = "none";
    } else {
        video.pause();
        playButton.children[0].classList.replace("bi-pause-fill", "bi-play-fill")
        liveplayItemOverlayIcon.style.display = "block";
        liveplayItemOverlayBox.style.display = "block";
    }
})


// volume
const leftSideControls = document.querySelector('.left-side-controls');
const volumeControl = document.querySelector('.volume-control');
const volumePanel = document.querySelector('.volume-panel');
const volumeRange = volumePanel.querySelector('input');
const volumeProgress = volumePanel.querySelector('.volume-progress');
const volumeButton = document.querySelector('.volume-btn');

const fullVolumeButton = volumeButton.querySelector('.full-volume');
const halfVolumeButton = volumeButton.querySelector('.half-volume');
const mutedButton = volumeButton.querySelector('.muted');

halfVolumeButton.style.display = 'none';
mutedButton.style.display = 'none';

const toggleMute = () => {
    video.muted = !video.muted;
    if (video.muted) {
        fullVolumeButton.style.display = 'none';
        halfVolumeButton.style.display = 'none';
        mutedButton.style.display = '';
        volumeRange.value = '0';
    } else {
        volumeRange.value = video.volume * 100;

        if (video.volume <= 0.5) {
            fullVolumeButton.style.display = 'none';
            halfVolumeButton.style.display = '';
            mutedButton.style.display = 'none';
        } else if (video.volume > 0.5) {
            fullVolumeButton.style.display = '';
            halfVolumeButton.style.display = 'none';
            mutedButton.style.display = 'none';
        }
    }
};

volumeButton.addEventListener('click', toggleMute);

volumeRange.addEventListener('input', function(e) {
    volumeProgress.style.width = volumeRange.value + '%';
    video.volume = volumeRange.value / 100;

    if (volumeRange.value <= 0) {
        fullVolumeButton.style.display = 'none';
        halfVolumeButton.style.display = 'none';
        mutedButton.style.display = '';
    } else if (volumeRange.value <= 50) {
        video.muted = false;
        fullVolumeButton.style.display = 'none';
        halfVolumeButton.style.display = '';
        mutedButton.style.display = 'none';
    } else if (volumeRange.value > 50) {
        video.muted = false;
        fullVolumeButton.style.display = '';
        halfVolumeButton.style.display = 'none';
        mutedButton.style.display = 'none';
    }
}, false);

volumeButton.addEventListener('mouseenter', function() {
    volumeControl.style.margin = '0px 2px 0px 0px';
    volumePanel.style.width = '110px';
});

leftSideControls.addEventListener('mouseleave', function() {
    volumeControl.style.margin = '0px 0px 0px 0px';
    volumePanel.style.width = '0px';
});

setInterval(function() {
    volumeProgress.style.width = volumeRange.value + '%';
}, 1);

function toggleActive(button) {
    if (button.classList.contains("active")) {
        return button.classList.remove("active");
    } else {
        return button.classList.add("active");
    }
}
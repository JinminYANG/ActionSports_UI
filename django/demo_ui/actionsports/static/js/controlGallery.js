// player__gallery
const swiper = new Swiper('.player__gallery__slider', {
    //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평 
    direction: 'horizontal',
    //한번에 보여지는 페이지 숫자 
    slidesPerView: 4,
    //페이지와 페이지 사이의 간격 
    spaceBetween: 0,
    //드래그 기능 true 사용가능 false 사용불가
    debugger: false,
    //마우스 휠기능 true 사용가능 false 사용불가 
    mousewheel: false,
    //반복 기능 true 사용가능 false 사용불가 
    loop: true,
    //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가
    centeredSlides: true,

    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        scale: 1,
    },

    //방향표 
    navigation: {
        //다음페이지 설정 
        nextEl: '.swiper-button-next',
        //이전페이지 설정 
        prevEl: '.swiper-button-prev',
    },
});
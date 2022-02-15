
"use strict";


document.addEventListener('DOMContentLoaded', () => {


    //Burger

    function burgerClick() {
        const burger = document.querySelector('.header__burger');
        const header = document.querySelector('.header');
        const body = document.body;
        const menu = document.querySelector('.header__nav');
        const btn = document.querySelector('.header__btn');

        const menuMobile = document.createElement('div');
        menuMobile.classList.add('menu-mobile');

        if (burger) {
            burger.addEventListener('click', () => {
                burger.classList.toggle('_active');
                body.classList.toggle('_active');
                header.classList.toggle('_active');
                menuMobile.classList.toggle('_active');
            });

            if (document.documentElement.clientWidth <= 964) {
                burger.insertAdjacentElement('afterend', menuMobile);
                menuMobile.insertAdjacentElement('beforeend', menu);
            }
            if (document.documentElement.clientWidth <= 580) {
                menuMobile.insertAdjacentElement('beforeend', btn);
            }
        }
    }

    burgerClick();

    //==============================================================


    // Slider

    function sliderSwiper() {
        const sliderOffer = document.querySelector('.offer__slider-wrapper');
        const sliderAbout = document.querySelector('.about__slider');
        const sliderportfolio = document.querySelector('.portfolio__slider');
        const sliderportfolioSmall = document.querySelectorAll('.portfolio__slider-small');
        const poerfolioText = document.querySelector('.portfolio-text__wrapper');

        if (sliderOffer) {
            const swiper = new Swiper(sliderOffer, {
                slidesPerView: 1,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
        if (sliderAbout) {
            const swiper = new Swiper(sliderAbout, {
                slidesPerView: 1,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
        if (sliderportfolio) {
            const swiperTextPortfolio = new Swiper(poerfolioText, {
                slidesPerView: 1,
                allowTouchMove: false,
                // effect: "fade",
            });

            const swiperPortfolio = new Swiper(sliderportfolio, {
                slidesPerView: 1,
                spaceBetween: 10,
                allowTouchMove: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                thumbs: {
                    swiper: swiperTextPortfolio,
                },
            });
        }
        if (sliderportfolioSmall.length > 0) {
            sliderportfolioSmall.forEach(element => {
                const swiper = new Swiper(element, {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.swiper-button-next-small',
                        prevEl: '.swiper-button-prev-small',
                    },
                });
            });
        }
    }
    sliderSwiper();

    //==================================================================


    // Tab Services

    function tabsHidden(tabs, contentItems) {
        for (let index = 0; index < tabs.length; index++) {
            const tab = tabs[index];
            tab.classList.remove('_active');
        }
        for (let index = 0; index < contentItems.length; index++) {
            const contentItem = contentItems[index];
            contentItem.classList.remove('_active');
        }
    }

    function tabServices(selectorTabs, selectorItem) {
        const tabs = document.querySelectorAll(selectorTabs);
        const contentItems = document.querySelectorAll(selectorItem);

        if (tabs.length > 0) {
            tabs[0].classList.add('_active');
            contentItems[0].classList.add('_active');

            for (let index = 0; index < tabs.length; index++) {
                const tab = tabs[index];
                tab.addEventListener('click', () => {
                    tabsHidden(tabs, contentItems);
                    contentItems[index].classList.add('_active');
                    tab.classList.add('_active');
                });
            }
        }
    }
    tabServices('.services__tab', '.content-services__item');
    tabServices('.maps__tab', '.maps__content-item');

    //===================================================================


    // Click menu-link


    function goToLink(selectorElement) {
        const scrollTarget = document.querySelector(selectorElement);
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        window.scrollBy({
            top: elementPosition,
            behavior: "smooth",
        });
    }

    function clickHaderLink() {

        const services = document.querySelector("[data-link='Services']");
        services.addEventListener('click', (e) => {
            e.preventDefault();
            goToLink('.services');
        });

        const about = document.querySelector("[data-link='About']");
        about.addEventListener('click', (e) => {
            e.preventDefault();
            goToLink('.about');
        });

        const prise = document.querySelector("[data-link='Prise']");
        prise.addEventListener('click', (e) => {
            e.preventDefault();
            goToLink('.prise');
        });

        const porfolio = document.querySelector("[data-link='Portfolio']");
        porfolio.addEventListener('click', (e) => {
            e.preventDefault();
            goToLink('.portfolio');
        });

        const contact = document.querySelector("[data-link='Contacts']");
        contact.addEventListener('click', (e) => {
            e.preventDefault();
            goToLink('.contacts');
        });

        const offer = document.querySelector("[data-link='offer']");
        offer.addEventListener('click', (e) => {
            e.preventDefault();
            goToLink('.offer');
        });

        const btn = document.querySelectorAll("[data-link='btn']");
        for (let index = 0; index < btn.length; index++) {
            const element = btn[index];

            element.addEventListener('click', (e) => {
                e.preventDefault();
                goToLink('.contacts');
                if (element.closest('.menu-mobile')) {
                    element.closest('.menu-mobile').classList.remove('_active');
                    document.body.classList.remove('_active');
                    document.querySelector('.header').classList.remove('_active');
                    document.querySelector('.burger-header').classList.remove('_active');
                }
            });
        }
    }
    clickHaderLink();

    //------------------------------------------------------------------


    // Visible

    function map(selectorItem, selectorPrevElement) {
        const map = document.querySelector(selectorItem);
        const mapPrevEl = document.querySelector(selectorPrevElement);

        if (map) {
            const mapPos = mapPrevEl.offsetTop;

            window.addEventListener('scroll', () => {
                if (window.pageYOffset >= mapPos) {
                    map.classList.remove('_noActive');
                }
            });
        }
    }
    map('.maps', '.contacts');
    map('.portfolio', '.prise');
    map('.about', '.services');

    //================================================================================================




    //Description on Slider Portfolio

    function descriptionOnSliderOirtfolioRemove(descr) {
        for (let index = 0; index < descr.length; index++) {
            const element = descr[index];
            element.classList.remove('_active');
        }
    }

    function descriptionOnSliderOirtfolio() {
        const descr = document.querySelectorAll('.portfolio .section__text');
        for (let index = 0; index < descr.length; index++) {
            const element = descr[index];
            // descr[0].classList.add('_active');
            descriptionOnSliderOirtfolioRemove(descr);
            element.classList.add('_active');
        }
    }

    //=======================================================================================================






});
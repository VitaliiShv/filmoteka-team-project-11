export const getRefs = () => {
  return {
    modalWatchedBtn: document.querySelector('.modal-film__btn-watched'),
    modalQueueBtn: document.querySelector('.modal-film__btn-queque'),
    watchedBtn: document.querySelector('#js-WatchedButton'),
    queueBtn: document.querySelector('#js-QueueButton'),
    galleryItems: document.querySelector('.film__list'),
    myLibrary: document.querySelector('#my-library'),
    divModal: document.querySelector('.modal'),
    backdrop: document.querySelector('.backdrop'),
    closeButton: document.querySelector('.close-button'),

    iconSun: document.querySelector('[data-action="light"]'),
    iconMoon: document.querySelector('[data-action="dark"]'),
    footerContainer: document.querySelector('.footer'),
    footerText: document.querySelector('.footer__descr'),
    footerBtn: document.querySelector('.footer__btn'),

    openModalOurTeam: document.querySelector("[data-open-modal_our-team]"),
    closeModalOurTeam: document.querySelector("[data-close-modal_our-team]"),
    modalOurTeam: document.querySelector("[data-modal_our-team]"),   
    socialIcons: document.querySelectorAll('.social-icons'),
    listEmployeItem: document.querySelectorAll('.list-employees-item'),
    titleModalOurTeam: document.querySelector('.title_modal_our-team'),
    iconClose: document.querySelector('.icon-close'),
    modalTeam: document.querySelector('.modal_our-team'),
    socialIconsDisabled: document.querySelectorAll('.social-icons__disabled'),
    information: document.querySelector('.information'),

  };
};

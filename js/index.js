import "./fetchNews.js";
import "./topNews.js";
import "./searchNews.js";
const choicesElem = document.querySelector('.js-choice');

const choises = new Choices(choicesElem, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  classNames: {
    containerInner: 'choices__inner choices-box',
  }
});
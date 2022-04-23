import {loadNews} from './topNews.js';
import {loadSearchNews} from './fetchNews.js';

const form = document.querySelector('.form-search');
const searchInput = document.querySelector('.search-input');
const choisedCountry = document.querySelector('.js-choice');
Promise.all([
    new Promise(() => {
        try {
            choisedCountry.addEventListener('change', (e) => {
                const value = choisedCountry.value;
                loadNews(value);
            });
        } catch (error) {
            console.error(error);
        }
    }),

    new Promise(() => {
        try {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                loadSearchNews(form.search.value);
                form.reset();
            });
        } catch (error) {
            console.error(error);
        }
    }),
]);

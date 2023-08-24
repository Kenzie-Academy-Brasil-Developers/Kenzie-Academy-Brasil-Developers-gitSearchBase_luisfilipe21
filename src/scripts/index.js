import { fetchUserData } from './request.js';
import { renderUserRepos } from './render.js';


const handleSearch = () => {
    const input = document.querySelector('.index__input');
    const button = document.querySelector('.index__button');

    button.addEventListener('click', () => {
        const userName = input.value;
        localStorage.setItem('@GitSearch:githubUserInfo', userName);

        fetchUserData(userName)
        // renderUserRepos()
    })
}

handleSearch();

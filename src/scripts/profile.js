import { renderUserInfo, renderUserRepos } from './render.js';

const handleNavigation = () =>  {
    const backButton = document.querySelector('.profile__change-user--button');

    backButton.addEventListener('click', () =>{
        localStorage.clear();
        location.replace('../../index.html');
    })
}

const getUserFromLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem('@GitSearch:githubUserInfo'));

    renderUserInfo(user);
}

getUserFromLocalStorage()
handleNavigation();

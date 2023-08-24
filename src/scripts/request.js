export const fetchUserData = async (userName) => {

    const fetchResult = await fetch(`https://api.github.com/users/${userName}`, {
        method: 'GET',

    })
        .then(async (response) => {
            if (response.ok) {
                const responseUser = await response.json();
                localStorage.setItem('@GitSearch:githubUserInfo', JSON.stringify(responseUser));
                location.replace('./src/pages/profile.html')
            } else {
                location.replace('./src/pages/error.html');
            }
        })
    return fetchResult
}
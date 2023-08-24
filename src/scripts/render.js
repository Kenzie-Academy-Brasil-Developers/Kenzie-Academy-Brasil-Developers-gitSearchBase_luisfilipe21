export const renderUserInfo = ({avatar_url, login}) => {
  const userImg = document.querySelector('.profile__image');
  const userName = document.querySelector('.profile__username')

  userImg.src = avatar_url;
  userName.innerText = login;
  renderUserRepos(login);
}


export const renderUserRepos = async (array) => {
  const finalUser = await fetch(`https://api.github.com/users/${array}/repos`, {
    method: 'GET',
  })
  .then(async (response) => {
    if(response.ok){
      const repositorios = await response.json()
      
      const ul = document.querySelector('ul');

      ul.classList.add('profile__ul');
      ul.innerHTML = ''

      repositorios.forEach(({name, description, html_url}) => {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        const a = document.createElement('a');


        if(description !== null){
          p.innerText = description;
        }else{
          p.innerText = `Repositório sem descrição`;
        }

        h4.innerText = name;
        a.innerText = `Repositório`;
        a.href = html_url;
        a.target = '_blank';

        li.append(h4, p, a);
        ul.appendChild(li);
        return ul;
      })
      return ul
    }
  }).catch((erro) =>{
    console.log(erro);
  })
  return finalUser
}


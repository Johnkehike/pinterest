

export function menu(){
    let homeContent = document.getElementById('content');
    let btn = document.getElementById('menu');
    btn.classList.remove('menu');
    btn.classList.add('menu-new');

    let titleMenu = document.createElement('div');
    titleMenu.classList.add('title');
    let titleH2 = document.createElement('h2');
    titleH2.textContent = `Welcome to Jokehi's Breakfast Bar - Menu Item`
    titleMenu.append(titleH2);

    let homeBody = document.createElement('div');
    homeBody.classList.add('home-body');

    let homeBodyPOne = document.createElement('p');
    homeBodyPOne.textContent = `Ofensala and Oha Soup`;
    let homeBodyPTwo = document.createElement('p');
    homeBodyPTwo.textContent = `Edikianko and Oferuru or whatever that is.`;
    homeBody.append(homeBodyPOne, homeBodyPTwo);

    homeContent.append(titleMenu, homeBody);

}
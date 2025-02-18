export function about(){
    let homeContent = document.getElementById('content');
    let btn = document.getElementById('about');
    btn.classList.remove('about');
    btn.classList.add('about-new');




    let titleMenu = document.createElement('div');
    titleMenu.classList.add('title');
    let titleH2 = document.createElement('h2');
    titleH2.textContent = `Welcome to Jokehi's Breakfast Bar`
    titleMenu.append(titleH2);

    let homeBody = document.createElement('div');
    homeBody.classList.add('home-body');
    let homeBodyPOne = document.createElement('p');
    homeBodyPOne.textContent = `quia, numquam cum voluptates architecto vitae nisi id enim corrupti ex officiis omnis non quis! Culpa aliquam nemo vel a doloribus?`;
    let homeBodyPTwo = document.createElement('p');
    homeBodyPTwo.textContent = `About: Lorem ipsum dolor sit amet consectetur adipisicing elit.`;
    homeBody.append(homeBodyPOne, homeBodyPTwo);

    homeContent.append(titleMenu, homeBody);
}
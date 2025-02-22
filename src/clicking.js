function sidebarClickEvents(){

    let pinterestIcons = document.querySelectorAll('.pinterest');
    let update = document.getElementById('update');
    let chat = document.getElementById('chat');

    pinterestIcons.forEach((pinterestIcon, index) =>{
        
        
        
        pinterestIcon.addEventListener('mouseover', (e) => {
            let  homeContent = pinterestIcon.querySelector('p');
                homeContent.classList.remove('come-up');
                homeContent.classList.add('come');
 
        });

        pinterestIcon.addEventListener('mouseleave', (e) => {
            let  homeContent = pinterestIcon.querySelector('p');
                homeContent.classList.remove('come');
                homeContent.classList.add('come-up');
        });




        pinterestIcon.addEventListener('click', (e) => {
            let  homeContent = pinterestIcon.querySelector('p').textContent;
            
            
            if (homeContent === 'Updates' && update.classList.contains('update')) {
                update.classList.remove('update');
                update.classList.add('update-new');
            }else if (homeContent === 'Updates' && update.classList.contains('update-new')) {
                update.classList.remove('update-new');
                update.classList.add('update');
            }else if (homeContent === 'Chat' && chat.classList.contains('chat')) {
                chat.classList.remove('chat');
                chat.classList.add('chat-new');
            }else if (homeContent === 'Chat' && chat.classList.contains('chat-new')) {
                chat.classList.remove('chat-new');
                chat.classList.add('chat');
            }
        })
    })
}

export { sidebarClickEvents }
function lockedProfile() {
        const $buttons = document.querySelectorAll('div#container main#main div.profile button');
        
        [...$buttons]
        .forEach((button) => {
            button.addEventListener('click', eventHandler);
        }); 
           
        function eventHandler(event){

          const divSibling = event.currentTarget.parentNode.children[9];
          const selector = divSibling.id.split('HiddenFields')[0]
          const $lockInput = document.querySelector(`input[name="${selector + 'Locked'}"]`);
          
          console.log($lockInput)

        if (!$lockInput.checked && event.currentTarget.textContent === "Show more") {
              divSibling.style.display = "block";
              event.currentTarget.textContent = "Hide it";
        }else if(!$lockInput.checked){
            divSibling.style.display = "none";
            event.currentTarget.textContent = "Show more";
          } 
 }
}


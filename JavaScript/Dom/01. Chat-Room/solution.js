function solve() {
   let sendButton = document.getElementById('send');
   let input = document.getElementById('chat_input');
   let messageField = document.getElementById('chat_box_body');

   document.addEventListener('click', (e) =>{
         console.log(e)   
      })

   sendButton.addEventListener('click', (e) =>{
      console.log('button')
   })
}



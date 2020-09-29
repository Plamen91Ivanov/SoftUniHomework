
    var userBtn = document.getElementById('user-btn');
    var doctorBtn = document.getElementById('doctor-btn')



    userBtn.addEventListener('click', () => {

        const testEl = document.getElementById('user');
 
        
        location.reload();
        
        testEl.style.display = 'block';
 
    });

    doctorBtn.addEventListener('click', () => {

        const testEl = document.getElementById('doctor');
 
        
        location.reload(); 
        
        testEl.style.display = 'block';

    });
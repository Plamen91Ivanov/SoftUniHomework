
    var userBtn = document.getElementById('user-btn');
    var doctorBtn = document.getElementById('doctor-btn')

    const userForm = document.getElementsByClassName('.row');

    console.log(userForm);

    userBtn.addEventListener('click', () => {
        const createEL = document.createElement('div');
        console.log(createEL)
        userForm.innerHTML = `<h1>HIHIHIHI</h1>`
     
        console.log(userForm);
    });
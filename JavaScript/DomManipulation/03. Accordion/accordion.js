function toggle() {
    
    const $divs = document.querySelectorAll('div > div')
    const $button = $divs[0].querySelector('span.button')
    console.log($button)

    if ($button.textContent === "More") {
        $button.textContent = "Less";
        $divs[1].style.display = 'block';
    }else{
        $button.textContent === "Less";
        $divs[1].style.display = 'none';
        $button.textContent = "More";
    } 
}

function bar(){
        const progressBar = document.getElementsByClassName('progress-bar')
        const pBar = progressBar[0]
        console.log(progressBar)
        console.log(pBar)
        const number = 20;
        pBar.style = 'width: ${number}%;'; 
        pBar.textContent = "80%";

}

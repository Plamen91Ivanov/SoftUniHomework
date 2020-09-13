const newYears =  '1 Jan 2021';
console.log('hi')
function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    const tottalSeconds = Math.floor((newYearsDate - currentDate) / 1000)
    
    const days = Math.floor(tottalSeconds / (24 * 3600));
    const daysDifference = Math.floor(tottalSeconds % (24 * 3600));
    
    const hours = Math.floor(daysDifference / 3600);
    const hoursDifference = Math.floor(daysDifference % 3600);

    const minutes = Math.floor(hoursDifference / 60);
    const minutesDifference = Math.floor(hoursDifference % 60);

    const seconds = minutesDifference;
    console.log(days + ' ' + hours + ' ' + minutes + ' ' + seconds) 
    
    document.getElementById('days').innerText = days
    document.getElementById('hours').innerText = hours
    document.getElementById('mins').innerText = minutes
    document.getElementById('seconds').innerText = seconds
}

countdown(); 

setInterval(countdown,1000)
 
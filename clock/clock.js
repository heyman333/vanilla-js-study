const clockContainer = document.querySelector(".js-clock")
const clockText = clockContainer.querySelector(".text")

function getTime() { 
    const hour = new Date().getHours()
    const minutes = new Date().getMinutes()
    const seconds = new Date().getSeconds()
    clockText.innerText = `${hour}:${minutes}:${seconds}`
}

function init() { 
    getTime()
    setInterval(() => {
        getTime()
    }, 1000);
}

init()



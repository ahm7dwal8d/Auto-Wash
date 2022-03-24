$(".header .burger-icon").click(function () {
    $(".header ul").slideToggle()
})


// landing 

let landingSection = document.querySelector(".landing")

let landingarrey = ["carousel-1.jpg" , "carousel-2.jpg" , "carousel-3.jpg"]

let RandomNumber = Math.floor(Math.random() * landingarrey.length)

setInterval(function () {

    let RandomNumber = Math.floor(Math.random() * landingarrey.length)

    landingSection.style.backgroundImage = "url(images/"+ landingarrey[RandomNumber] +")"

} , 10000)

// About Section 

let AboutImg = document.querySelector(".about img")

AboutImg.addEventListener("click" , function () {
    let overly = document.createElement("div")

    overly.className = "about-overly"

    document.body.appendChild(overly)

    let Box = document.createElement("div")

    Box.className = "overly-box"

    overly.appendChild(Box)

    let Boximg = document.createElement("img")

    Boximg.src = AboutImg.src

    Box.appendChild(Boximg)

    let CloseButton = document.createElement("span")

    CloseButton.className = "close-button"

    Box.appendChild(CloseButton)

    CloseButtonText = document.createTextNode("X")

    CloseButton.appendChild(CloseButtonText)

    document.addEventListener("click" , function (el) {

        if (el.target.className === "close-button") {
            Box.remove()
            overly.remove()
        }
    })
})

// Counter Section 

let CounterSection = document.querySelector(".counter")

let CounterOffsetTop = CounterSection.offsetTop


let counterSpan = document.querySelectorAll(".counter .num")


let started = false

function StartCounter(el) {

    let goal = el.dataset.goal;

    let Counte = setInterval(function () {

        el.textContent++;

        if (el.textContent === goal) {

            clearInterval(Counte)

        }

    } , 2000 / goal)
}

// Team Section 

let TeamSectionImg = document.querySelectorAll(".team img")

TeamSectionImg.forEach((image)=> {

    image.addEventListener("click" , function () {
        let overlyBox = document.createElement("div")

        overlyBox.className = "overly"

        document.body.appendChild(overlyBox)

        let Boximg = document.createElement("div")

        Boximg.className = "box-img"

        if (image.alt !== " ") {
            let name = document.createElement("h3")

            name.className = "box-name"

            Boximg.appendChild(name)

            let nameText = document.createTextNode(image.alt)

            name.appendChild(nameText)
        }

        overlyBox.appendChild(Boximg)

        let IMG = document.createElement("img")

        IMG.src = image.src

        Boximg.appendChild(IMG)

        let CloseButton = document.createElement("span")

        CloseButton.className = "close-button"

        Boximg.appendChild(CloseButton)

        let CloseButtonText = document.createTextNode("X")

        CloseButton.appendChild(CloseButtonText)

        document.addEventListener("click" , function (el) {

            if (el.target.className === "close-button") {
                Boximg.remove()
                overlyBox.remove()
            }
        })

    })
})

// Fixed Header 

let TopBar = document.querySelector(".topbar")

let Header = document.querySelector(".header")

let buttonToTop = document.querySelector(".to-top")

buttonToTop.addEventListener("click" ,  function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

window.onscroll = function () {

    console.log(`${window.scrollY}`)

    // Fixed Header 

    if (window.scrollY >= 1000) {

        Header.classList.add("active")

        TopBar.classList.add("active")

        buttonToTop.classList.add("active")

    } else {

        Header.classList.remove("active")

        TopBar.classList.remove("active")

        buttonToTop.classList.remove("active")

    }

    // Counte Section 

    if (window.scrollY <= CounterOffsetTop) {

        if (!started) {

            counterSpan.forEach((span)=> StartCounter(span) )

        }
        started = true

    }
}
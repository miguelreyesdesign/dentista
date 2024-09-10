const boxes = document.querySelectorAll('.autoShow');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    const triggerBottom = window.innerHeight * 0.3;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;

        // Si el top del elemento está por debajo del trigger (hacia abajo) añade 'visible'
        if (boxTop < triggerBottom) {
            box.classList.add('autoShow2');
        }
        
        // Si el bottom del elemento está por encima del viewport (scroll hacia arriba), quita 'visible'
        if (boxBottom < 0 || boxTop > window.innerHeight) {
            box.classList.remove('autoShow2');
        }
    });
}

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if
    (menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "100vh"
    }
    else{
        menuList.style.maxHeight = "0px"
    }
}




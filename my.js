let hamburger1 = document.getElementById('hamburger1');
hamburger1.addEventListener("click", () => {

    let ul1 = document.querySelector(' nav > ul');
    ul1.classList.toggle('menu-slide');
    hamburger1.classList.toggle('cross')
});

const li = document.querySelectorAll(".nav-link");
    const sec = document.querySelectorAll("section");

    const ActiveMenu= ()=> {
        let len=sec.length;
        console.log(len);
        while(--len && window.scrollY + 97 < sec[len].offsetTop){
            li.forEach(ltx =>ltx.classList.remove("active"));
            li[len].classList.add("active");
        }
        ActiveMenu();
        window.addEventListener("scroll", ActiveMenu);
    }
    export default ActiveMenu;
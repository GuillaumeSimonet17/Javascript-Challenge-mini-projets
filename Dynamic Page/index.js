window.onload = () => {
    const tab_switchers = document.querySelectorAll("[data-switcher]");

    for(let i = 0; i < tab_switchers.length; i++){
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;
        
        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tab.active').classList.remove("active")
            tab_switcher.parentNode.classList.add('active')

            switchPage(page_id)
        })
    }
}
function switchPage(page_id){
    const currentPage = document.querySelector(".page.active");
    currentPage.classList.remove("active");

    const nextPage = document.querySelector(`.page[data-page="${page_id}"]`);
    nextPage.classList.add("active")
}
    let menu = document.getElementById('menu');
    let line1 = document.getElementById('line1');
    let line2 = document.getElementById('line2');
    let line3 = document.getElementById('line3');
    let dabba = document.querySelector('.dabba');
    menu.addEventListener('click', () => {
        line1.classList.toggle('rotateP');
        line2.classList.toggle('remove');
        line3.classList.toggle('rotateN');
        dabba.classList.toggle('auto');
    })



    const btns = document.querySelectorAll("[data-target]");
    var close_modals = document.querySelectorAll(".close-modal");
    const overlay = document.getElementById("overlay");
    // For opening Pop up
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelector(btn.dataset.target).classList.add("active");
            overlay.classList.add('active');
        });
    });
    // For Closing Popup using "X" sign
    close_modals.forEach((btn) => {
        btn.addEventListener("click", () => {
            const modal = btn.closest(".modal");
            modal.classList.remove("active");
            overlay.classList.remove("active");
        });
    });
    //After opening popup, if you click outside the popup, it will close.
    window.onclick = (event) => {
        if (event.target == overlay) {
            const modals = document.querySelectorAll(".modal");
            modals.forEach((modal) => modal.classList.remove("active"));
            overlay.classList.remove("active");
        }
    };

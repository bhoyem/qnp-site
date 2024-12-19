let processImageArea = document.getElementById("process-imagearea");



function hideElement() {
    if (window.innerWidth < 768) {
        processImageArea.classList.add("hidden");
        console.log("hideElement");
    }
    else {
        processImageArea.classList.remove("hidden");
        console.log("unhideElement");
    }
};

window.addEventListener("load", function () {
    hideElement();
    console.log("window.innerWidth = " + this.window.innerWidth)
    console.log("screen.width = " + this.screen.width);
});

window.addEventListener('resize', function () {
    hideElement();
    console.log("window.innerWidth = " + this.window.innerWidth)
    console.log("screen.width = " + this.screen.width);
});


document.getElementById("share-btn").addEventListener("click", function () {
    // alert('your are right');
    let shareIcons = document.getElementById("share-icon");
    if(shareIcons.classList.contains("hidden")) {
        shareIcons.classList.remove("hidden");
        shareIcons.classList.add("flex");
    } else {
        shareIcons.classList.add("hidden");
    }
});

var SCROLL_THRESH = 100;

// Shrink header when user starts to scroll
document.addEventListener('scroll', function(e) {
    if(window.scrollY > SCROLL_THRESH) {
        var header = document.getElementsByTagName("header")[0];
        if(!header.classList.contains("shrink")) {
            header.classList.add("shrink");
        }
        
    }
}, {passive: true})


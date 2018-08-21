function onLoad(loading, loaded) {
    if (document.readyState === 'complete') {
        return loaded();
    }
    loading();
    if (window.addEventListener) {
        window.addEventListener('load', loaded, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', loaded);
    }
};

onLoad(function () {

    },
    function () {



        let images = document.querySelectorAll(".img-thumbnail");

        for (var i = 0; i < images.length; i++) {
            images[i].classList.add("hvr-grow-shadow");
        }

    });
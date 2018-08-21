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
        let e = document.querySelector('.wrapper');
        let d = document.querySelector('.bg_load');


        e.classList.add("animated");
        e.classList.add("fadeOut");
        e.style.visibility = "hidden";



        let logoDTL = document.querySelector('#logo-DTL-text');
        let lineDTL = document.querySelector('#logo-DTL-line');


        logoDTL.classList.add("slideInRight");
        lineDTL.classList.add("slideInLeft");


        console.log(logoDTL);



        d.style.visibility = "hidden";

        let fbbtn = document.querySelector(".btn");
        let twitterbtn = document.querySelector(".fa-twitter");
        let carouselItems = document.querySelectorAll(".carousel-item img");

        for (var i = 0; i < carouselItems.length; i++) {
            carouselItems[i].classList.add("animated");
            carouselItems[i].classList.add("zoomIn");
        }



        fbbtn.addEventListener("click", function () {

            document.getElementById("fbb").classList.toggle("d-none");

            var d = document.getElementById("fbb").classList.contains("d-none");

            if (d) {
                document.getElementById("fbb").classList.add("animated");
                document.getElementById("fbb").classList.add("slideInRight");
            }
        });

        twitterbtn.addEventListener("click", function () {
            document.getElementById("tww").classList.toggle("d-none");

            var tw = document.getElementById("tww").classList.contains("d-none");

            if (tw) {
                document.getElementById("tww").classList.add("animated");
                document.getElementById("tww").classList.add("slideInRight");
            }
        });




    });
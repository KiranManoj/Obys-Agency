function loadingAnimation() {
    // Using GSAP set everything in a timer. - timeline()
    var tl = gsap.timeline()

    // setting up h1 tags first
    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5
    });

    // setting counter 0-100
    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            var h5timer = document.querySelector("#line1-part1 h5");
            var grow = 0;
            setInterval(function () {
                if (grow < 100) {
                    h5timer.innerHTML = grow++;
                } else {
                    h5timer.innerHTML = grow;
                }
            }, 33);
        },
    });

    tl.to(".line h2", {
        animationName: "anime",
        opacity: 1
    })
    // setting up the entire #loader screen in seconds.
    tl.to("#loader", {
        opacity: 0,
        duration: 0.4,
        delay: 2,
    });

    tl.from("#page1", {
        delay: 0.2,
        y: 1600,
        opacity: 0,
        duration: 0.5,
        ease: Power4
    })
    tl.to("#loader", {
        display: "none"
    })
    tl.from("#nav",{
        opacity:0
    })
    tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
        y:150,
        stagger:0.2
    })
}

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        });
    });
    
    // Make Magnet Feature
    Shery.makeMagnet("#nav-part2 h4");
}

loadingAnimation();
cursorAnimation()

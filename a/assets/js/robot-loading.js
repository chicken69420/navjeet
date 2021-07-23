const jetBubbles = document.getElementsByClassName('jetBubble');
const rocketManSVG = document.querySelector('.rocketManSVG');
const shakeGroup = document.querySelector('.shakeGroup');
const star = document.querySelector('.star');
const satellite = document.querySelector('.satellite');
const astronaut = document.querySelector('.astronaut');
const starContainer = document.querySelector('.starContainer');
const badgeLink = document.querySelector('#badgeLink');
const svgDiv = document.querySelector('.svg-div');
const scrollBtn = document.querySelector('.scroll-btn');
TweenMax.to(astronaut, 0.05, {
    y: '+=4',
    repeat: -1,
    yoyo: true
});
let mainTimeline = new TimelineMax({repeat: -1});
let mainSpeedLinesTimeline = new TimelineMax({repeat: -1, paused: false});

mainTimeline.timeScale(6).seek(100);

function createJets() {
    TweenMax.set(jetBubbles, {
        attr: {
            r: '-=5'
        }
    });
    //jet bubbles
    for (let i = 0; i < jetBubbles.length; i++) {
        let jb = jetBubbles[i];
        let tl = new TimelineMax({repeat: -1});
        tl.to(jb, 1, {
            attr: {
                r: '+=15'
            },
            ease: Linear.easeNone
        })
            .to(jb, 1, {
                attr: {
                    r: '-=15'
                },
                ease: Linear.easeNone
            });

        mainTimeline.add(tl, i / 4)
    }
    //speed lines
    for (let i = 0; i < 7; i++) {
        let sl = document.querySelector('#speedLine' + i);

        let stl = new TimelineMax({repeat: -1, repeatDelay: Math.random()});
        stl.set(sl, {
            drawSVG: false
        })
            .to(sl, 0.05, {
                drawSVG: '0% 30%',
                ease: Linear.easeNone
            })
            .to(sl, 0.2, {
                drawSVG: '70% 100%',
                ease: Linear.easeNone
            })
            .to(sl, 0.05, {
                drawSVG: '100% 100%',
                ease: Linear.easeNone
            })
            .set(sl, {
                drawSVG: '-1% -1%'
            });

        mainSpeedLinesTimeline.add(stl, i / 23);
    }
    //stars
    for (let i = 0; i < 7; i++) {

        let sc = star.cloneNode(true);
        starContainer.appendChild(sc);
        let calc = (i + 1) / 2;

        TweenMax.fromTo(sc, calc, {
            x: Math.random() * 600,
            y: -30,
            scale: 3 - calc
        }, {
            y: (Math.random() * 100) + 600,
            repeat: -1,
            repeatDelay: 1,
            ease: Linear.easeNone
        })
    }

    rocketManSVG.removeChild(star);
}


let satTimeline = new TimelineMax({repeat: -1});
satTimeline.to(satellite, 46, {
    rotation: 360,
    transformOrigin: '50% 50%',
    ease: Linear.easeNone
});

TweenMax.staggerTo('.pulse', 0.8, {
    alpha: 0,
    repeat: -1,
    ease: Power2.easeInOut,
    yoyo: false
}, 0.1);

TweenMax.staggerTo('.satellitePulse', 0.8, {
    alpha: 0,
    repeat: -1,
    ease: Power2.easeInOut,
    yoyo: false
}, 0.1);

createJets();
scrollBtn.addEventListener('click', ()=>{
    astronaut.style.transform = 'translateY(-100%)';
    setTimeout(()=>svgDiv.style.transform = 'translateY(-100%)', 500);

    setTimeout(()=>{
        svgDiv.style.display = 'none';

    resolveFetch().then(animationTimeline());

    }, 2000);
});

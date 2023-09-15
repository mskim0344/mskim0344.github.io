gsap.timeline({
    scrollTrigger: {
        trigger: "#start-wrap",
        start: "center center", // �쒖옉�� 
        end: "bottom top", // �앸굹�� �쒖젏
        //markers:true,
        scrub: true,
        pin: true
    }
})

.to(".video1", {
    x: innerHeight * 0.3,
    y: innerHeight * 0.3,
    duration: 2,
    rotate: 360,
    opacity: 0
})
.to(".video2", {
    x: innerHeight * -0.1,
    y: innerHeight * -0.1,
    duration: 2,
    rotate: 360,
    opacity: 0
})
.to(".video3", {
    x: innerHeight * 0.3,
    y: innerHeight * 0.3,
    duration: 2,
    rotate: 360,
    opacity: 0
})
.to(".video4", {
    x: innerHeight * 0.1,
    y: innerHeight * 0.1,
    duration: 2,
    rotate: 360,
    opacity: 0
})
.to(".planet2", {
    duration: 2,
    opacity: 0
})
.to(".planet1", {
    duration: 2,
    opacity: 0
})

.to(".text_wrap", {
    duration: 2,
    rotate: 360,
    opacity: 0
})
.to("#start-wrap", {
    duration: 3,
    opacity: 0
})

gsap.timeline({
    scrollTrigger: {
        trigger: "#section1",
        start: "center center", // �쒖옉�� 
        end: "bottom top", // �앸굹�� �쒖젏
        //markers:true,
        scrub: true,
        pin: true
    }
})

.from("#section1", {
    duration: 3,
    backgroundColor: "#bdbdbe",
    opacity: 0
})
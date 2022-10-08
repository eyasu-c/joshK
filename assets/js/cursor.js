var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function() {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e){
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.display = "block";
})

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
        cursor.classList.remove('grow-big');

    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
        if(link.classList.contains('big')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-big');
        }
        // ___ cursor timeout
        function mouseStopped(){
            cursor.style.display = "none";
        }
        clearTimeout(timeout);
        timeout = setTimeout(mouseStopped, 2000);
    });
})
// ___ cursor out event ___
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});
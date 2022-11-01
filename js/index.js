window.onload = function () {
    initIframe()
}

const initIframe =()=>{
    let fr = document.createElement("iframe");
    fr.id = 'iframe'
    fr.src = `https://nethouse-test.ru/example.php`;
    fr.height = 100;
    fr.style.width = '100%';
    fr.style.border = 'none';

    fr.style.border= '0';
    fr.style.height= '90%';
    fr.style.left= '2%';
    fr.style.top= '10px';
    fr.style.width= '96%';
    fr.style.position= 'absolute';
    fr.style.background= 'transparent';

    fr.onload = function(){
        initEvents()
    }
    document.getElementById('modal_content').appendChild(fr)
}

const initEvents =()=>{
    let deltaY;
    let moveModal = document.getElementById("moveModal");
    let moveOverlay = document.getElementById("moveOverlay");
    let iframe = document.getElementById("iframe");

    const getMouse = (e) => {
        setHeight(e.pageY - deltaY)
    }

    const getTouch = (e) => {
        setHeight(e.targetTouches[0].pageY - deltaY)
    }

    const setHeight = (val) => {
        let height = window.innerHeight - val
        if (height > window.innerHeight) height = window.innerHeight
        if (height <= 50) {
            height = 50
        }
        moveModal.style.height = height + "px";
    }

    const stopMove = (e) => {
        let height = window.innerHeight - e.pageY ? e.pageY : e.targetTouches[0].pageY;
        if (height < 100) {
            height = 90
        }
        if (height < 75) {
            height = 50
        }
        if (height < 45) {
            height = 30
        }
        if (height < 30) {
            height = 10
        }
        moveModal.style.height = height + "px";
    }


    moveModal.ontouchstart = function (e) {
        deltaY = e.targetTouches[0].pageY - moveModal.offsetTop;
        window.addEventListener('touchmove', getTouch);
    }

    moveModal.ontouchend = function (e) {
        window.removeEventListener('touchmove', getTouch);
    }

    moveModal.onmousedown = function (e) {
        deltaY = e.pageY - moveModal.offsetTop;
        window.addEventListener('mousemove', getMouse);
    }

    moveModal.onmouseup = function (e) {
        window.removeEventListener('mousemove', getMouse);
    }

    moveOverlay.ontouchstart = function (e) {
        deltaY = e.targetTouches[0].pageY - moveModal.offsetTop;
        window.addEventListener('touchmove', getTouch);
    }

    moveOverlay.ontouchend = function (e) {
        window.removeEventListener('touchmove', getTouch);
    }

    moveOverlay.onmousedown = function (e) {
        deltaY = e.pageY - moveModal.offsetTop;
        window.addEventListener('mousemove', getMouse);
    }

    moveOverlay.onmouseup = function (e) {
        window.removeEventListener('mousemove', getMouse);
    }

    iframe.ontouchstart = function (e) {
        deltaY = e.targetTouches[0].pageY - moveModal.offsetTop;
        window.addEventListener('touchmove', getTouch);
    }

    iframe.ontouchend = function (e) {
        window.removeEventListener('touchmove', getTouch);
    }

    iframe.onmousedown = function (e) {
        deltaY = e.pageY - moveModal.offsetTop;
        window.addEventListener('mousemove', getMouse);
    }

    iframe.onmouseup = function (e) {
        window.removeEventListener('mousemove', getMouse);
    }

    console.log('12')

}
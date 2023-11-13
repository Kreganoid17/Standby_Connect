const delay = 2000;
let calltimer;
let isHoldingCallButton;

function call() {

    isHoldingCallButton = true;
    calltimer = setTimeout(() => {

        //a trigger to start a call
        console.log("call started....");
    }, delay);

}


window.addEventListener('mouseup', (e) => {

    if (isHoldingCallButton) {
        if (calltimer) {

            clearTimeout(calltimer);
        }
    }

});
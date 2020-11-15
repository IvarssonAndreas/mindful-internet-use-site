function breathe(numBreaths = 10) {

    let counter = 0;
    const container = document.getElementById('breathe-container');
    const actionText = document.getElementById('breathe-text-action');
    const breathLeftText = document.getElementById('breathe-text-action--2');
    breathLeftText.innerText = numBreaths;


    const totalTime = 10000;
    const breatheTime = (totalTime / 5) * 2;
    const holdTime = totalTime / 5;

    breathAnimation();


    function breathAnimation() {
        breathLeftText.innerText = numBreaths - counter;

        actionText.innerText = 'Breathe In';
        container.className = 'breathe-container grow';


        setTimeout(() => {
            actionText.innerText = 'Hold';

            setTimeout(() => {
                actionText.innerText = 'Breathe Out';
                container.className = 'breathe-container shrink';
            }, holdTime);

        }, breatheTime);
        counter++


        if (counter >= numBreaths) {
            counter = 0;
        }


    }

    setInterval(breathAnimation, totalTime);

}

document.getElementById('breathe').innerHTML = `
        <div class="breathe-container" id="breathe-container">
            <div class="circle"></div>

            <p class="breathe-text" id="breathe-text">
                <span class="breathe-text__action" id="breathe-text-action"></span>
                <span class="breathe-text__action--2" id="breathe-text-action--2"></span>
            </p>

            <div class="breathe-pointer-container">
                <span class="breathe-pointer"></span>
            </div>

            <div class="gradient-circle"></div> 
        </div>`

breathe()


let keyDisplay = document.getElementById('key-display');

let keyBord = document.getElementById('key-bord');

let backspace = document.getElementById('backspace');

let capsLk = document.getElementById('capsLk');

let btns = document.getElementsByClassName('btn')




keyDisplay.addEventListener('dblclick', function () {

    if (keyBord.style.display === 'none') {
        keyBord.style.display = 'flex';
    }
    else {
        keyBord.style.display = 'none';

    }

})




capsLk.addEventListener('click', function () {

    for (btn of btns) {

        let text = btn.innerText
        if (text === text.toUpperCase()) {
            btn.innerText = text.toLowerCase();


        }
        else if (text === text.toLowerCase()) {
            btn.innerText = text.toUpperCase();

        }





    }
});




keyBord.addEventListener('click', function (event) {

    console.log(event.target.className === 'btn')
    if (event.target.className === 'btn') {

        keyDisplay.innerText += event.target.innerText
        event.stopImmediatePropagation()
    };
});

backspace.addEventListener('click', function () {
    let currentText = keyDisplay.innerText;
    let newText = currentText.slice(0, -1);
    keyDisplay.innerText = newText;

    // akhane -1  bujanu hoyece last theke akta index remove kora hobe .
    // 1st pm  ar kaj hocce kun jayga theke suru hobe 2nd PM ar kaj hocce kun index ar age giye ses hobe ...2 PM ar modder text ta thakbe baki ta remove hoye jabe 
    // ar jodi 2nd PM ts nagative valu hoy jemon aikhane -1 .ta hole last theke 1 ta index remove hobe. -5 thakle last theke 5 ta index remove hoito  


    //


})









// let row1=  document.getElementById('row-1');
// let row2=  document.getElementById('row-2');
// let row3=  document.getElementById('row-3');
// let row4=  document.getElementById('row-4');
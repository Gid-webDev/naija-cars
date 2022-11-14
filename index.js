const showPage = document.querySelector('#showcase');

function Gbutton () {
    if (showPage.className == 'open') {
        // show menu close
        showPage.className = '';
        Garage.innerHTML = 'open';

    } else {
        showPage.className = 'open';
        Garage.innerHTML = 'close';
    }
}
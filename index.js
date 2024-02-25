var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.target.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab")

}


const scriptURL = 'https://script.google.com/macros/s/AKfycbx2pktKJgJrrzpJ8FkYXwSz4TJbdng_4ji5Wu6aICU84BGByPgBnLu-W9gegKEOz03u/exec';
const form = document.forms['submit-to-google-sheet'];

const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Your message is sent successfully!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})



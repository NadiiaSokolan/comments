"use strict";
const comment_input = document.getElementById('comment_input');
const send_btn = document.getElementById("send_btn");
const comment_list = document.getElementById('comment_list');
function addComments() {
    if (comment_list && comment_input) {
        comment_list.innerText = comment_input.value;
    }
}
// if(send_btn) {
//     send_btn.addEventListener('click', addComments)
// }

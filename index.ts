
const comment_input = document.getElementById('comment_input')as HTMLInputElement;
const send_btn = document.getElementById("send_btn");
const comments_list = document.getElementById('comments_list');

function addComments () {
    if (comments_list && comment_input) {
        const p = document.createElement('p');
        p.textContent = comment_input.value;
        comments_list.appendChild(p);
    }
}
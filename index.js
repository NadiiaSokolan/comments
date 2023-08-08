var comment_input = document.getElementById('comment_input');
var send_btn = document.getElementById("send_btn");
var comments_list = document.getElementById('comments_list');
function addComments() {
    if (comments_list && comment_input) {
        comments_list.innerHTML = comments_list.innerHTML + "<p>" + comment_input.value + "</p>";
    }
}

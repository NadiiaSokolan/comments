
const comment_input = document.getElementById('comment_input')as HTMLInputElement;
const send_btn = document.getElementById("send_btn");
const comments_list = document.getElementById('comments_list');

function addComments () {
    if (comments_list && comment_input.value) {

        // Create a new comment item
        const newCommentItem = document.createElement('div');
        newCommentItem.className = 'comment_item';

        // Create a new comment container
        const newCommentContainer = document.createElement('div');
        newCommentContainer.className = 'comment_container';

        // Create a new text container
        const newTextContainer = document.createElement('div');
        newTextContainer.className = 'text_container';
        newTextContainer.textContent = comment_input.value;

        // Create command buttons (Edit and Delete)
        const commandButtons = document.createElement('div');
        commandButtons.className = 'command_button';

        // Create Edit button
        const editButton = document.createElement('button');
        editButton.className = 'btn btn-edit';
        editButton.textContent = 'Edit';

        // Create Delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-delete hover-effect:delete';
        deleteButton.textContent = 'Delete';

        // Append buttons to the commandButtons div
        commandButtons.appendChild(editButton);
        commandButtons.appendChild(deleteButton);

        // Append text container and command buttons to the comment container
        newCommentContainer.appendChild(newTextContainer);
        newCommentContainer.appendChild(commandButtons);

        // Append the comment container to the new comment item
        newCommentItem.appendChild(newCommentContainer);

        // Append the new comment item to the comments list
        comments_list.appendChild(newCommentItem);

        // Clear the comment input
        comment_input.value = '';
    }
}
let btnForm = document.querySelector('#comments-form button');
let countComments = 0;
let idComment = 0;

btnForm.onclick = function() {
    idComment++;
    let form = document.querySelector("#comments-form");
    if(form.name.value.length < 4) {
        document.querySelector('#error').innerHTML = "Довжина імя не менше 4 символів";
        return false;
    } else if(form.comment.value.length < 10) {
        document.querySelector('#error').innerHTML = 'Довжина повідомлення не менше 10 символів';
        return false;
    }

    document.querySelector('#error').innerHTML = '';

    // new value for the comment count


    if(countComments == 0) {    
        document.querySelector('#comments').innerHTML = "";
    }
        countComments++;
        document.querySelector(".count-comm").innerHTML = countComments;

        let newComment = "<div class='comment' id='block-" + idComment + "'>" +
            "<span class='delete' onclick='delComm(" + idComment + ")'>&times;</span>" +
            "<p class='name'>" + form.name.value + "</p>" +
            "<p class='mess'>" + form.comment.value + "</p>" +
        "</div>";

        document.querySelector('#comments').insertAdjacentHTML('afterbegin', newComment);

        // Form cleaning

        form.comment.value = "";
};

function delComm(id) {
    document.querySelector("#block-" + id).remove();

    countComments--;
    document.querySelector(".count-comm").innerHTML = countComments;

    if(countComments == 0)
        document.querySelector('#comments').innerHTML = "Поки коментарів немає";
}

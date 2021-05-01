$(document).ready(function () {
    $("#addBtn").click(addClickHandler);
    $("#removeBtn").click(removeClickHandler);

});

const itemsList = [];

function addClickHandler() {
    let inputVal = $('#toDoInput').val();
    addListItem(inputVal);
    $('#toDoInput').val('')
}

function removeClickHandler() {
    if (itemsList.length) {
        removeListItem();
    }
}

function addListItem(content) {
    const itemNode = $("<div>").addClass('item');
    const itemText = content || $('#toDoInput').val();
    if (!itemText.length) {
        return alert("The entity is empty, please enter some data!")
    }
    const itemValue = $('<div>')
        .text(itemText)
        .addClass('task');

    itemNode
        .append(itemValue)
        ;

    $('#list').append(itemNode);

    itemsList.push(itemNode);
    return itemNode
}

function removeListItem() {
    const itemToRemove = itemsList.shift();
    itemToRemove.remove();
}
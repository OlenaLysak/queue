(function () {
    let itemsList = [];
    const MAX_ITEMS = 32;

    $(document).ready(function () {
        renderCached();
        $("#addBtn").click(addClickHandler);
        $("#removeBtn").click(removeClickHandler);

    });

    async function renderCached() {
        const listCache = await sessionStorage.getItem("list");
        if(listCache){
            itemsList = JSON.parse(listCache);
            renderList(itemsList);
        }
    }

    function addClickHandler() {
        if (itemsList.length === MAX_ITEMS) {
            return alert("You have reached maximum amount of items. Please remove some before adding new ones.")
        }
        let inputVal = $('#toDoInput').val();
        if (!inputVal.length) {
            return alert("The entity is empty, please enter some data!")
        }
        itemsList.push(inputVal);
        renderList(itemsList);
        $('#toDoInput').val('')
        cacheData();
    }

    function removeClickHandler() {
        itemsList.shift();
        renderList(itemsList);
        cacheData();
    }

    function renderList(itemsListArray) {
        $('#list').empty();

        itemsListArray.forEach(item => {
            const itemNode = $("<div>").addClass('item');
            const itemText = item;
            const itemValue = $('<div>')
                .text(itemText)
                .addClass('task');

            itemNode
                .append(itemValue);

            $('#list').append(itemNode);
        })
    }

    function cacheData() {
        sessionStorage.setItem("list", JSON.stringify(itemsList));
    }
})();

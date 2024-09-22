let counter = 1;

function deleteTODO(index) {
    let ele = document.getElementById("todo-" + index);
    ele.parentNode.removeChild(ele);
    counter--;
}

function addnewTODO() {
    let parent = document.querySelector("#content");
    let newDiv = document.createElement("div");

    const inputElement = document.querySelector("input");
    const value = inputElement.value;

    newDiv.innerHTML = `<div class="uppertodo" id='todo-${counter}'>
                        <div class='todos'>
                            ${counter}${". "+value} 
                        </div>
                        <div class="delete" onclick="deleteTODO(${counter})">
                            Delete
                        </div>
                    </div>`;
    parent.appendChild(newDiv);

    counter++;

    inputElement.value = "";
}
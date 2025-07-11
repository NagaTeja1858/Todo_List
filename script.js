let titleInput = document.getElementById("tasktitle");
let descInput = document.getElementById("taskdesc");
let taskList = document.getElementById("tasklist");
let addButton = document.getElementById("add");

addButton.onclick = function () {
    let title = titleInput.value.trim();
    let desc = descInput.value.trim();

    if (title.length === 0 || desc.length === 0) {
        alert("Please fill in both Title and Description!");
        return;
    }

    let taskHTML = `
        <div class="task">
            <h3>${title}</h3>
            <p>${desc}</p>
            <button class="del"><i class="fa fa-trash"></i></button>
        </div>
    `;
    taskList.innerHTML += taskHTML;

    // Re-bind delete buttons
    let deleteButtons = document.querySelectorAll(".del");
    deleteButtons.forEach(btn => {
        btn.onclick = function () {
            this.parentElement.remove();
        };
    });

    titleInput.value = "";
    descInput.value = "";
};

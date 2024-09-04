const items = document.querySelectorAll('.dropdown-menu .group-item');
const dropdown = document.getElementById("dropdown-menu");
const nameInput = document.getElementById("name-input");
const teamButton = document.getElementById("team-button");
const groupTeams = document.getElementById("table-group");
const clearMatchBtn = document.getElementById("clear-last-users");
const ui = new UI();

eventListeners();
function eventListeners() {
    teamButton.addEventListener("click", getData);
    clearMatchBtn.addEventListener("click", getAllClear);
}

function getData(e) {
    console.log(nameInput.value)
    Request.prototype.getMatches(nameInput.value, (matchs) => {

        console.log(matchs.team1.name, matchs.score1, matchs.team2.name, matchs.score2)
        console.log(matchs)
        ui.groupMatch(matchs);
       

    });
    if (nameInput.value == "") {
        alert("Takım kısmını doldurunuz")
    }
    
    
    nameInput.value = "";
}
function getAllClear(e) {
    ui.clearMatch();
}

items.forEach(item => {
    item.addEventListener('click', function () {
        const selectedText = this.textContent;
        document.getElementById('dropdownButton').textContent = selectedText;
    });
});
dropdown.addEventListener('change', function () {
    if (dropdown.value === "") {
        groupTeams.style.display = "none";
    } else {
        groupTeams.style.display = "block";
    }
})

let select = document.getElementById("dropdown-menu");

select.addEventListener("change", (event) => {
    let value = event.target.value;
    if (value) {
        console.log("istek at");
        Request.prototype.getGroups(value, (data) => {

            ui.showGroupInfo(data);
        });
        Request.prototype.getMatches();


        // istek at
    } else {
        console.log("boşalt");
        // boşalt
    }
})



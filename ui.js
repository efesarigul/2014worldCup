class UI {
    groupTeams = document.getElementById("table-group")
    groupWons = document.querySelectorAll(".won");
    groupDraws = document.querySelectorAll(".drawn");
    groupLose = document.querySelectorAll(".lost");
    selectGroup = document.getElementById("selectGroup");
    matchSearch = document.getElementById("matchSearch");
    lastMatch = document.getElementById("last-matches");
    list = document.getElementsByClassName("border");

    showGroupInfo(data) {
        console.log();
        this.groupTeams.innerHTML =
            `
        <div class="group-container">
                    <h1 id="group-name">${data.Groupname}</h1>
                    <hr>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Takım</th>
                                <th scope="col">Galibiyet</th>
                                <th scope="col">Beraberlik</th>
                                <th scope="col">Mağlubiyet</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td class="team">${data.standings[0].team.name}</td>
                                <td class="won">${data.standings[0].won}</td>
                                <td class="drawn">${data.standings[0].drawn}</td>
                                <td class="lost">${data.standings[0].lost}</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td class="team">${data.standings[1].team.name}</td>
                                <td class="won">${data.standings[1].won}</td>
                                <td class="drawn">${data.standings[1].drawn}</td>
                                <td class="lost">${data.standings[1].lost}</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td class="team">${data.standings[2].team.name}</td>
                                <td class="won">${data.standings[2].won}</td>
                                <td class="drawn">${data.standings[2].drawn}</td>
                                <td class="lost">${data.standings[2].lost}</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td class="team">${data.standings[3].team.name}</td>
                                <td class="won">${data.standings[3].won}</td>
                                <td class="drawn">${data.standings[3].drawn}</td>
                                <td class="lost">${data.standings[3].lost}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        `
    }

    groupMatch(matchs) {

        let goals1 = "";
        let goals2 = "";

        if (matchs.goals1?.length > 0) {
            matchs.goals1.forEach(element => {
                goals1 += `<li><i class="fa-regular fa-futbol" style="padding: 5px;"></i>${element.minute} ' ${element.name}</li>`;
            });
        }

        if (matchs.goals2?.length > 0) {
            matchs.goals2.forEach(element => {
                goals2 += `<li><i class="fa-regular fa-futbol" style="padding: 5px;"></i>${element.minute} '  ${element.name}</li>`;
            });
        }

        this.matchSearch.innerHTML +=
            `
       <div class="border">
            <div class="container-text-center d-flex" style="justify-content: space-around; " id="last-matches">
                <div class="row" id="macths-goal" style="width: 400px;">
                    <div class="col-md-4">${matchs.team1.name}</div>
                    <div class="col-md-4">${matchs.score1 + "-" + matchs.score2}</div>
                    <div class="col-md-4">${matchs.team2.name}</div>
                </div>
                
            </div>
            <div class= "match-design">
            <div class="goals" style="display: flex; width: 400px;">
            <div class="col-md-6">
                <ul style="padding-left: 0;">
                `
            + goals1 +
            `
                </ul>
            </div>
            <div class="col-md-6">  
            <ul>
            `
            + goals2 +

            ` </ul>
            </div>
            </div>
        </div>
        `

    }
    clearMatch() {
        this.matchSearch.innerHTML =
            `
    
    `
        setTimeout(() => {
            this.matchSearch.innerHTML = `
        <div class="alert alert-success" role="alert">
        Silme İşlemi Başarılı
</div>
        `
        }, 300);
        setTimeout(() => {
            this.matchSearch.innerHTML = `
            
            `
          }, 2000);

    }

}


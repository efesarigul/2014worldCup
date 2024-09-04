class Request {
  getGroups(value, success) {
    fetch("http://localhost:3000/groups")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ağ hatası: " + response.statusText);
        }
        return response.json();

      })
      .then((data) => {
        console.log(data);

        let groupName = data.find((group) => (group.Groupname === value));
        success(groupName);
        
      })
      .catch((error) => {
        console.error("JSON verisi çekme hatası:", error);
      });
  }
getMatches(team,fonk){
  team = team.toLowerCase();
  fetch("http://localhost:3000/rounds")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ağ hatası: " + response.statusText);
    }
    return response.json();
  })
  .then((data)=>{
    console.log(data);
    data.forEach(element => {
      let isMatch = false;
      element.matches.forEach(matchs=>{
        if (team == matchs.team1.name.toLowerCase() || team == matchs.team2.name.toLowerCase()) {
          isMatch = true;
          fonk(matchs);
        }
      });
      // if(!isMatch){
      //   alert("Takım bulunamadı.")
      // } 
      
    });
  
  })
}
}



class Request{
    
    
}
// JSON dosyasının yolu
const worldcupGroup = 'worldcup.groups.json';
const Matches = 'worldcup.json';
const Stadium = 'worldcup.stadiums.json';
const standing = 'worldcup.standings.json';
const teams = 'worldcup.teams.json';
// JSON verisini çek
fetch(worldcupGroup)
  .then(response => {
    // Yanıtın geçerli bir JSON olup olmadığını kontrol et
    if (!response.ok) {
      throw new Error('Ağ hatası: ' + response.statusText);
    }
    return response.json(); // Yanıtı JSON olarak döndür
  })
  .then(data => {
    console.log(data); // JSON verilerini kullan
  })
  .catch(error => {
    console.error('JSON verisi çekme hatası:', error);
  });


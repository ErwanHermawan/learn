var siswa = [
{
  "name": "Genta Uchita Anggraini",
  "score": 90
},
{
  "name": "Ibun Pangestu",
  "score": 75
},
{
  "name": "Saiful Sihombing",
  "score": 70
},
{
  "name": "Dian Hariyah",
  "score": 88
},
{
  "name": "Dipa Pradana",
  "score": 87
},
{
  "name": "Putri Mutia Lestari",
  "score": 95
},
{
  "name": "Juli Lestari",
  "score": 77
},
{
  "name": "Indah Mulyani",
  "score": 93
},
{
  "name": "Garda Candra Pangestu",
  "score": 60
},
{
  "name": "Icha Uyainah",
  "score": 87
},
];

function siswaTeratas(){
  siswa.sort(function(a,b){
    return b.score - a.score
  });
}

function siswaTerbawah(){
  siswa.sort(function(a,b){
    return a.score - b.score
  });
}

function keluaranData(){
  var content = '';
  siswa.forEach(function(val, i){
    if(i < 3) {
      content += '<tr>' +
      '<td>'+ (i+1) +'.' +'</td>' +
      '<td>'+ val.name +'</td>' +
      '<td>'+ val.score +'</td>' +
      '</tr>';
    }
  });
  document.getElementById('data').innerHTML = content;
}

document.getElementById('nilai').onchange = function() {
  if (this.value == 1) {
    siswaTeratas();
  } else if (this.value == 2) {
    siswaTerbawah();
  }
  keluaranData();
}
keluaranData();

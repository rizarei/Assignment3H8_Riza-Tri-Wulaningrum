function getDataIndonesia() {
    fetch('https://indonesia-covid-19.mathdro.id/api')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let positif = data.jumlahKasus
        let sembuh = data.sembuh
        let meninggal = data.meninggal
        
        document.getElementById("data-positif").innerHTML = positif
        document.getElementById("data-sembuh").innerHTML = sembuh
        document.getElementById("data-meninggal").innerHTML = meninggal  
    })
    .catch(err => {
        console.log(err)
    });
}

function getDataProvinsi() {

    let dataProvinsi = "<tr><th>Provinsi</th><th>Positif</th><th>Sembuh</th><th>Meninggal</th></tr>";

    fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.data.forEach(function(item) {
            dataProvinsi += '<tr>'
            dataProvinsi += '<td>'+ item.provinsi + '</td>'
            dataProvinsi += '<td>'+ item.kasusPosi + '</td>'
            dataProvinsi += '<td>'+ item.kasusSemb + '</td>'
            dataProvinsi += '<td>'+ item.kasusMeni + '</td>'
            dataProvinsi += '</tr>'
        })

        document.getElementById("table-provinsi").innerHTML = dataProvinsi
    })
    .catch(err => {
        console.log(err)
    });
}
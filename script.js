



async function getData(){
    

    let factNumber = await fetch (`https://restcountries.com/v3.1/all`)

    let res = await factNumber.json()

    console.log(res);
    const listing_table = document.getElementById('table-data');
    listing_table.innerHTML = '';
    for (let i = 0; i < res.length; i++) {
        listing_table.innerHTML +=
            `
        <tr>
        <td>${res[i].name.common}</td>
        <td>${res[i].region}</td>
        <td>${res[i].capital}</td>
        <td>${res[i].area}</td>
        <td>${res[i].population}</td>
        <td>${res[i].continents}</td>
        <td>${res[i].name.official}</td>
        <td>${res[i].latlng[0]}</td>
        <td>${res[i].latlng[1]}</td>
        </tr>
        `;
    }

}
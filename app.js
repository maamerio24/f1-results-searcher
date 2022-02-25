let rankingsSearch = document.querySelector('#find');
let year = document.querySelector('#year');
let round = document.querySelector('#round');
let standings = document.querySelector('#rankings');


rankingsSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(`http://ergast.com/api/f1/${year.value}/${round.value}/driverstandings.json`)
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < 10; i++) {
                let driverPlacement = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i]
                let placement = document.createElement('tr')
                placement.innerHTML += `<tr>
                <td>${driverPlacement.position}</td>
                <td>${driverPlacement.Driver.givenName} ${driverPlacement.Driver.familyName}</td>
                <td>${driverPlacement.Driver.nationality}</td>
                <td>${driverPlacement.Constructors[0].name}</td>
                <td>${driverPlacement.points}</td>
            </tr>`

                standings.appendChild(placement);

            }

        });
})
    ;
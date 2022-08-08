
axios.get('data.json') 
.then((response) => {
    console.log(response);
    let players = response.data.Sheet1;
    let output = '';
    $.each(players, (index, player) => {
        output += `
        <tr>
        <td>${player.Position}</td>
        <td>${player.Name}</td>
        <td>${player.Apperiences}</td>
        <td>${player.Assists}</td>
        <td>${player.Clean_Sheets}</td>
        </tr>
        `;
    });

    $('#stats').html(output);
})
.catch((err) => {
    console.log(err);
});


//sorting
    $(document).ready( function () {
        $('#table').DataTable();
    } );
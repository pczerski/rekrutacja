'use strict';

$(function () {

    function getUsersData(init) {
        for (var i = init; i <= init+4; i++) {

            $.getJSON('https://jsonplaceholder.typicode.com/users/' + i, function (data) {
                console.log(data);
                console.log(data.name);
                console.log(data.address.street);

                var parId = document.createElement('p');
                var parName = document.createElement('p');
                var parStreet = document.createElement('p');
                
                parId.innerHTML = 'ID: ' + data.id;
                parName.innerHTML = 'Imię i nazwisko: ' + data.name;
                parStreet.innerHTML = 'Ulica: ' + data.address.street;

                parId.className += 'user-id';
                parName.className += 'user-name';
                parStreet.className += 'user-street';
                //console.log(parName);
                //console.log(parStreet);

                $('#users-data').append(parId);
                $('#users-data').append(parName);
                $('#users-data').append(parStreet);

            });
        }
    };
    getUsersData(1);
    
    $('#load-users').on('click', function () {
        var usersOnList = $('.user-name').length; // Ile jest w sumie elementów    
        
        getUsersData(usersOnList + 1);
    });
    
});

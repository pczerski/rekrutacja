'use strict';

$(function () {
    for (var i = 1; i <= 5; i++) {

        $.getJSON('https://jsonplaceholder.typicode.com/users/' + i, function (data) {
            console.log(data);
            console.log(data.name);
            console.log(data.address.street);

            var parName = document.createElement('p');
            var parStreet = document.createElement('p');
            parName.innerHTML = 'Imię i nazwisko: ' + data.name;
            parStreet.innerHTML = 'Ulica: ' + data.address.street;
            
            parName.className += 'user-name';
            parStreet.className += 'user-street';
            //console.log(parName);
            //console.log(parStreet);

            $('#users-data').append(parName);
            $('#users-data').append(parStreet);

        });
    }

});

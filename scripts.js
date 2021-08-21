var saturdayCrew = [
    {
        firstName: 'Willard',
        lastName: 'Grayson',
        age: 29
    },
    {
        firstName: 'Eric',
        lastName: 'Hossner',
        age: 26
    },
    {
        firstName: 'James',
        lastName: 'Goedert',
        age: 35
    },

];
console.log('Hello World!');

var ul = document.createElement('ul');
document.getElementById('saturday-crew-list').appendChild(ul);

for(var i = 0; i < saturdayCrew.length; i++){
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += saturdayCrew[i].firstName + ' ' + saturdayCrew[i].lastName;
}

let mountains = [
{
    name: 'kilimanjaro',
    height: 5895,
    place: 'tanzania'
},
{
    name: 'fastshow',
    height: 7654,
    place: 'dubia'
}

]

function task () {
    const table = document.createElement('table')
    table.innerHTML='<tr><th>name</th><th>height</th><th>place</th></tr>'
    
    for(let key of mountains){
        const row2 = document.createElement('tr');
        const cell1= document.createElement('td');
        const cell2= document.createElement('td');
        const cell3= document.createElement('td');

        cell1.innerText = key.name
        cell2.innerText  = key.height
        cell3.innerText = key.place

        row2.appendChild(cell1)
        row2.appendChild(cell2)
        row2.appendChild(cell3)

        table.appendChild(row2)

        const mountain = document.querySelector('#mountain')
        mountain.appendChild(table)
    }
}

task()
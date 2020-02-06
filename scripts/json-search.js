
var text = {
    "allpeople":
        [{
            "name": "Jane Doe", "sex": 'f', "born": 1876, "died": 1956, "Father": "Petrus de Milliano", "Mother": "Sophia van Dammne"
        },
            {
                "name": "Jane Ramirez", "sex": 'f', "born": 1856, "died": 1946, "Father": "Peto russo", "Mother": "Sophia"
            },
            {
                "name": "Don", "sex": 'm', "born": 1886, "died": 1936, "Father": "kullu", "Mother": "van"
            },
            {
                "name": "John", "sex": 'm', "born": 1866, "died": 1926, "Father": "zito", "Mother": "Dammne"
            },
            {
                "name": "Rita", "sex": 'f', "born": 1846, "died": 1976, "Father": "Milliano", "Mother": "Dame"
            }]
};

document.getElementById('search').onclick = search;

function search() {
    document.getElementById('result').innerHTML = "";
    var element = document.getElementById('name').value;
    for (let i = 0; i <text.allpeople.length ; i++) {
        var searchperson = text.allpeople[i];
        if (searchperson.name.toLowerCase().includes(element.toLowerCase()))
        {
            document.getElementById('result').innerHTML +='Name: ' +  searchperson.name + "<br>" +
            'Sex:' + searchperson.sex + "<br>" + 'Born: ' +  searchperson.born + "<br>" + 'Died: ' +
                searchperson.died + "<br>" + 'Father: ' +  searchperson.Father + "<br>" +
            'Mother: ' +  searchperson.Mother + "<br>" + "<br>";
        }
    }
    if (document.getElementById('result').innerHTML === "")
    {
        document.getElementById('result').innerHTML = "NO RESULT FOUND"
    }
    }



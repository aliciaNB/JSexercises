let json = [
    {
        "name": "Frodo Baggins",
        "sex": "m",
        "born": 1959,
        "died": 2003,
        "father": "Ben Baggins" ,
        "mother": "Daphney Baggins"
    },
    {
        "name": "Jane Doe",
        "sex": "f",
        "born": 1876,
        "died": 1956,
        "father": "Petrus de Milliano",
        "mother": "Sophia van Damme"
    },
    {
        "name": "Jane Ramirez",
        "sex": "f",
        "born": 1975,
        "died": 2012,
        "father": "Juan Ramirez",
        "mother": "Selma Ramirez"
    },
    {
        "name": "John Smith",
        "sex": "m",
        "born": 1921,
        "died": 2007,
        "father": "David Smith",
        "mother": "Jone Smith"
    },
    {
        "name": "Sam Bennett",
        "sex": "f",
        "born": 1946,
        "died": 2017,
        "father": "Matthew Bennett",
        "mother": "Emily Bennett"
    }
];

document.getElementById("find").onclick = function () {
    findPeople();
};

function findPeople() {
    let person = document.getElementById("search").value;
    let result = document.getElementById("result");

    let found = false;
    for (let i = 0; i < json.length; i++) {

        let stringObj = json[i].name.toLowerCase().split(" ");
        let stringPerson = person.toLowerCase().split(" ");
        if (   stringObj[0] === stringPerson[0]
            || stringObj[1] === stringPerson[1]) {
            found = true;
            result.innerHTML += "<p>Name: " + json[i].name +
                "<br>Sex: " + json[i].sex +
                "<br>Born: " + json[i].born +
                "<br>Died: " + json[i].died +
                "<br>Father: " + json[i].father +
                "<br>Mother: " + json[i].mother + "</p>";
        }
    }
    if (found === false) {
        result.innerHTML = "<p>No person found.</p>";
    }
}
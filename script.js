let myID = "";

// Create an Array of Objects from the CSV data
const rows = csv.split('\n');
const headers = rows[0].split(',');
const combos = rows.slice(1).map(row => {
  const values = row.split(',');
  const obj = {};
  headers.forEach((header, index) => {
    obj[header] = values[index];
  });
  return obj;
});

function filterByProperty(id) {
    myID = id;
    displayCombo(combos.filter(hasValue));
    document.getElementById(myID).value = "";
}

function hasValue(combo) {
    return Object.values(combo).includes(
        document.getElementById(myID).value
    ) || Object.values(combo).includes(
        document.getElementById(myID).value + " BGE"
    ) || Object.values(combo).includes(
        document.getElementById(myID).value + " Show"
    );
}

function displayCombo(comboArray) {
    let toDisplay = "";

    for (combo of comboArray) {
        for (value in combo) {
            toDisplay += combo[value] + "<br>";
        }
        toDisplay += "<br>";
    }
    if (toDisplay === "") {
        document.getElementById("result").innerHTML = "There are no combos that " +
        "match your selection!";
    } else {
        document.getElementById("result").innerHTML = toDisplay;
    }
}
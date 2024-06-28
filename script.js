let myID = "";

//TODO: How to handle "All's"

/*
    name: "",
    character: "",
    bge: "",
    skill1: "",
    skill1Value: ,
    skill2: "",
    skill2Value: ,
    skill3: "",
    skill3Value: ,
    rarity: "",
    imgSource: ""
*/

const combos = [
    {
        name: "Grenade Amy",
        character: "Amy",
        bge:  "Armed",
        skill1: "Payback",
        skill1Value: 27,
        skill2: "Heal",
        skill2Value: 30,
        skill3: "Leech",
        skill3Value: 27,
        rarity: "Legendary",
        imgSource: ""
    },
    {
        name: "Ray Gun Rifle Amy",
        character: "Amy",
        bge:  "Armed",
        skill1: "Bodyguard",
        skill1Value: 27,
        skill2: "Sturdy",
        skill2Value: 26,
        skill3: "Cripple",
        skill3Value: 31,
        rarity: "Legendary",
        imgSource: ""
    },
    {
        name: "Whale Hunter Amy",
        character: "Amy",
        bge:  "Armed",
        skill1: "Punch",
        skill1Value: 27,
        skill2: "Jab",
        skill2Value: 30,
        skill3: "Bomb",
        skill3Value: 22,
        rarity: "Legendary",
        imgSource: ""
    },
    {
        name: "Assassin Bender",
        character: "Bender",
        bge: "Armed",
        skill1: "Bomb",
        skill1Value: 19,
        skill2: "Leech",
        skill2Value: 30,
        skill3: "Crazed",
        skill3Value: 19,
        rarity: "Legendary",
        imgSource: ""
    },
    {
        name: "Bender's Weapons",
        character: "Bender",
        bge: "Armed",
        skill1: "Shield All",
        skill1Value: 11,
        skill2: "Bomb",
        skill2Value: 15,
        skill3: "N/A",
        skill3Value: 0,
        rarity: "Legendary",
        imgSource: ""
    },
    {
        name: "Flame Belcher Bender",
        character: "Bender",
        bge: "Armed",
        skill1: "Enlarge",
        skill1Value: 15,
        skill2: "Cripple",
        skill2Value: 30,
        skill3: "Gas",
        skill3Value: 27,
        rarity: "Legendary",
        imgSource: ""
    },
    {
        name: "Sleighing Tonight",
        character: "Bender",
        bge: "Armed",
        skill1: "Sturdy",
        skill1Value: 17,
        skill2: "Shield",
        skill2Value: 15,
        skill3: "Cheer All",
        skill3Value: 8,
        rarity: "Legendary",
        imgSource: ""
    },
    {
        name: "Space Pistol Bender",
        character: "Bender",
        bge: "Armed",
        skill1: "Sturdy",
        skill1Value: 22,
        skill2: "Bodyguard",
        skill2Value: 19,
        skill3: "Bomb",
        skill3Value: 19,
        rarity: "Legendary",
        imgSource: ""
    }
];

function filterByProperty(id) {
    myID = id;
    displayCombo(combos.filter(hasValue));
    document.getElementById(myID).value = "";
}

function hasValue(combo) {
    return Object.values(combo).includes(
        document.getElementById(myID).value.charAt(0).toUpperCase() +
        document.getElementById(myID).value.slice(1)
    );
}

function displayCombo(comboArray) {
    let toDisplay = "";

    for (combo of comboArray) {
        for (value in combo) {
            toDisplay += combo[value] + "<br>";
        }
    }
    if (toDisplay === "") {
        document.getElementById("result").innerHTML = "There are no combos that " +
        "match your selection!";
    } else {
        document.getElementById("result").innerHTML = toDisplay;
    }
}
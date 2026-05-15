//OBJECTS TO PULL AT HOME
// MANIFEST
function normalizeUnits(manifest) {
    let normalizedManifest = {...manifest};
    if (normalizedManifest.unit === "lb") {
        normalizedManifest.unit = "kg";
        normalizedManifest.weight = normalizedManifest.weight * 0.45;
    } 
    return normalizedManifest;
}

// console.log(normalizeUnits({containerId: 68, destination: "Salinas", weight: "101", unit: "lb", hazmat: true}));

function validateManifest(manifest) {
    let invalidProperty = {};
    if (!("containerId" in manifest)) {
        invalidProperty.containerId = "Missing"
    } else if (typeof manifest.containerId !== "number" || manifest.containerId === null  || manifest.containerId <=0 || !Number.isInteger(manifest.containerId)) {
        invalidProperty.containerId = "Invalid"
    }

    if (!("destination" in manifest)) {
        invalidProperty.destination = "Missing";
    } else if (manifest.destination === null || typeof manifest.destination !== "string" || manifest.destination.trimStart().length === 0 || manifest.destination.trimEnd().length === 0) {
        invalidProperty.destination = "Invalid";
    }

    if (!("weight" in manifest)) {
        invalidProperty.weight = "Missing";
    } else if (typeof manifest.weight !== "number" || manifest.weight <= 0 || isNaN(manifest.weight)) {
        invalidProperty.weight = "Invalid";
    }

    if (!("unit" in manifest)) {
        invalidProperty.unit = "Missing";
    } else if (typeof manifest.unit !=="string" || manifest.unit !== "kg" && manifest.unit !== "lb") {
        invalidProperty.unit = "Invalid";
    }

    if (!("hazmat" in manifest)) {
        invalidProperty.hazmat = "Missing";
    } else if (manifest.hazmat === null || typeof manifest.hazmat !== "boolean") {
        invalidProperty.hazmat = "Invalid";
    }
 
    return invalidProperty;
}


// console.log(validateManifest({ containerId: 1, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false}));

// Invalid Validation
// console.log(validateManifest({containerId: -2, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false}));
// console.log(validateManifest({containerId: 1, destination: "    ", weight: 304, unit: "kg", hazmat: false}));
// console.log(validateManifest({containerId: 1, destination: "Santa Cruz", weight: -84, unit: "kg", hazmat: false}));
// console.log(validateManifest({containerId: 1, destination: "Santa Cruz", weight: 304, unit: "pound", hazmat: false}));
// console.log(validateManifest({containerId: 1, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: "fake"}));
// console.log(validateManifest({containerId: -1, destination: 548, weight: "304", unit: "keso", hazmat: "true"}));

// Missing Validation
// console.log(validateManifest({destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false}));
// console.log(validateManifest({containerId: 1, weight: 304, unit: "kg", hazmat: false}));
// console.log(validateManifest({containerId: 1, destination: "Santa Cruz", unit: "kg", hazmat: false}));
// console.log(validateManifest({containerId: 1, destination: "Santa Cruz", weight: 304, hazmat: false}));
// console.log(validateManifest({containerId: 1, destination: "Santa Cruz", weight: 304, unit: "kg"}));
// console.log(validateManifest({}));

console.log(processManifest({containerId: -1, destination: "   ", weight: 0, unit: "pound", hazmat: 0}));

// console.log(validateManifest({containerId: "Stringcheese"}));
// console.log(validateManifest({}));
// console.log(validateManifest({ destination: "  "}));
// console.log(validateManifest({ weight: NaN}));


function processManifest(manifest) {
    if (Object.keys(validateManifest(manifest)).length === 0) {
        normalizeUnits(manifest);
        let normalUnits = normalizeUnits(manifest);
        console.log(`Validation success: ${manifest.containerId}`);
        console.log(`Total weight: ${normalUnits.weight} ${normalUnits.unit}`);
    } else {
        let validatedManifest = validateManifest(manifest);
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(validatedManifest);
    }

    return manifest;
}

// processManifest({containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false});
// processManifest({containerId: -88, destination: "Soledad", weight: NaN});
// processManifest({destination: "Watsonville", hazmat: true});
// processManifest({})

//Random Quiz Game
/*const questions = [{
    category: "JavaScript Basics",
    question: "Does 'typeof null' return the string object?",
    choices: ["yes", "no", "maybe"],
    answer: "yes"
},
{
    category: "Array Methods",
    question: "Will the .push() method add an element to the beginning of an array?",
    choices: ["yes", "no", "maybe"],
    answer: "no"
},
{
    category: "Software Testing",
    question: "Is Regression Testing perfomed to ensure that new code changes?",
    choices: ["yes", "no", "maybe"],
    answer: "yes"
},
{
    category: "CSS",
    question: "Is padding the space located outside of an element's border?",
    choices: ["yes", "no", "maybe"],
    answer: "no"
},
{
    category: "Database",
    question: "In MSSQL, can a Primary Key contain a NULL value?",
    choices: ["yes", "no", "maybe"],
    answer: "no"
}];


function getRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

const askedQuestion = getRandomQuestion(questions);
const choicesArray = askedQuestion.choices;


function getRandomComputerChoice(choicesArray) {
    let answerIndex = Math.floor(Math.random() * choicesArray.length);
    let randomAnswer = choicesArray[answerIndex];
    return randomAnswer;
}


const selectedAnswer = getRandomComputerChoice(choicesArray);

function getResults(askedQuestion, selectedAnswer) {
    if (selectedAnswer === askedQuestion.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${askedQuestion.answer}`;
    }
}

console.log(getResults(askedQuestion, selectedAnswer));*/
//LOOP
//Festival Crowd Flow Simulator
/*const morningGates = [
  { id: "North", capacity: 5, queue: [3, 6, 2, 4] },
  { id: "East", capacity: 3, queue: [2, 4, 3, 5] },
  { id: "South", capacity: 4, queue: [1, 2, 3, 1] },
  { id: "West", capacity: 2, queue: [4, 1, 2, 3] },
];

const nightGates = [
  { id: "North", capacity: 4, queue: [6, 2, 5, 1] },
  { id: "East", capacity: 2, queue: [3, 3, 4, 2] },
  { id: "South", capacity: 5, queue: [2, 1, 2, 3] },
  { id: "West", capacity: 3, queue: [5, 2, 1, 4] },
];

function initializeThroughput(gates) {
    const summary = {};
    for (let i = 0; i < gates.length; i++) {
        summary[gates[i].id] = 0;
    }
    return summary
}

function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
        currentTickQueue--;
        processed++;
    }
    return {
        processed,
        overflow: currentTickQueue
    };
}

function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount){
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    const nextGate = gates[nextGateIndex];
    nextGate.queue[tickIndex] += overflowAmount;
    console.log(`${overflowAmount} attendees rerouted to ${gates[nextGateIndex].id}`);
}

function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log(`\nProcessing ${gate.id}...`);
    console.log(`${gate.queue[tickIndex]} attendees arriving.`);
    let result = processGateFlow(gate, tickIndex);
    throughputSummary[gate.id] += result.processed;
    if (result.overflow > 0) {
        console.log(`Overflow of ${result.overflow} attendees. Rerouting...`);
        rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }
}

function printSummary(summary) {
    console.log("\nThroughput Summary");
    for (let gateId in summary) {
        console.log(gateId + ": " + summary[gateId] + " attendees processed.");
    }
}

function simulateFestival(gates, timeBlock) {
    console.log(`\n ${timeBlock} Simulation`);
    let throughputSummary = initializeThroughput(gates);
    const maxTicks = gates[0].queue.length;
    let tickIndex = 0;
    while (tickIndex < maxTicks) {
        console.log("\nTick " + (tickIndex + 1));
        for (let gate of gates) {
            handleGateAtTick(gates, gate, tickIndex, throughputSummary);
        }
        tickIndex++;
    }
    printSummary(throughputSummary);
}

simulateFestival(morningGates, "Morning");
simulateFestival(nightGates, "Night");*/

//Missing Letter Detector
/*function fearNotLetter(alphaStr) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let missingLetter;
    let missingLetterIndex = alphabet.indexOf(alphaStr[0]);

    for (let i = 0; i < alphaStr.length; i++){
        if (alphaStr[i] != alphabet[missingLetterIndex + i]) {
            missingLetter = alphabet[missingLetterIndex + i];
            return missingLetter;
        }
    }
}*/

//Proofreading Tool
function isPalindrome(word) {
    palindrome = true;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() != word[word.length - 1 - i].toLowerCase()) {
            palindrome = false;
        }
    }
    return palindrome;
}

console.log(isPalindrome("jucy"));
console.log(isPalindrome("hannah"));

// isPalindrome(word):
// palindrome - case insensitive .toLowerCase();
// a for loop to index each character from left to right
// a for loop to index each character from right to left
// if left to right === right to left return true
// else return false

function findPalindromeBreak(words){
    let nonPalindrome = [];
    for (i = 0; i < words.length; i++) {
        const wordIndex = isPalindrome(words[i]);
        const wordIndexNum = words.indexOf(words[i]);
        if (wordIndex === false) {
            nonPalindrome.push(wordIndexNum);
        }
    }
    return nonPalindrome;
}

console.log(findPalindromeBreak(["Racecar", "Hannah", "Rica", "Yow", "Meow"]));

// findPalindromeBreak(words[]):
// a for loop using isPalindrome on the words[]
// if not same characters return an array of indices of words not palindromes
// return empty if input empty

function findRepeatedPhrases(words, phraseLength){
    let returnArray = [];
    for (i = 0; i < words.length; i++) {
        if (words.length <= phraseLength) {
            return returnArray;
        } else if (words.length > phraseLength) {

            returnArray.push()
        }
    }
}

findRepeatedPhrases(words, phraseLength):
return array of words appeared more than once in the array
return empty array if phraseLength >= words.length

// let repeatedPhrases = findRepeatedPhrases(words, phraseLength);

// function analyzeTexts(texts, phraseLength){

// }

// analyzeTexts(texts, phraseLength):
// for loop each texts[i]
// using repeatedPhrases and palindromeBreaks
// return an array of objects with each repeatedPhrases and palindromeBreaks
// return empty array if texts is empty
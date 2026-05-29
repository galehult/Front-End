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
/*function isPalindrome(word) {
    if (!word) return false;
    let cleanWord = word.toLowerCase();
    let reversedWord = cleanWord.split("").reverse().join("");
    return cleanWord === reversedWord;
}

function findPalindromeBreaks(words) {
    let breaks = [];
    if (!words || words.length === 0) return breaks;

    let wordsArray = typeof words === "string" ? words.split(" ") : words;

    for (let i = 0; i < wordsArray.length; i++) {
        if (!isPalindrome(wordsArray[i])) {
            breaks.push(i);
        }
    }
    return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
    let result = [];

    if (!words || words.length <= phraseLength || phraseLength <= 0) {
        return result;
    }

    for (let i = 0; i <= words.length; i++) {
        let currentPhrase = words.slice(i, i + phraseLength).join(" ");
        let count = 0;

        for (let j = 0; j <= words.length - phraseLength; j++) {
            let scanPhrase = words.slice(j, j + phraseLength).join(" ");
            if (currentPhrase === scanPhrase) {
                count++;
            }
        }
        if (count > 1) {
            result.push(i);
        }
    }
    return result;
}

function analyzeTexts(texts, phraseLength) {
    let finalResults = [];

    if (!texts || texts.length === 0) {
        return finalResults;
    }

    for (let i = 0; i < texts.length; i++) {
        let currentText = texts[i];
        let wordsArray = typeof currentText === "string" ? currentText.split(" ") : currentText;

        let analysisResult = {
            repeatedPhrases: findRepeatedPhrases(wordsArray, phraseLength),
            palindromeBreaks: findPalindromeBreaks(wordsArray)
        }
        finalResults.push(analysisResult);
    }
    return finalResults;
}*/

//Smart Pantry Restocker
/*function parseShipment(rawData) {
    const shipmentData = [];
    let isStringArray = rawData.every(rawData => typeof rawData === "string");

    for (let i = 0; i < rawData.length; i++) {
      const splitter = rawData[i].split("|");
      let count = 0;
      let processedData = {};
      if (shipmentData.some(newShipData => newShipData.sku === splitter[0])) {
        continue
      }
      for (let j = 0; j < splitter.length; j++) {
        if (j === 0) {
            processedData.sku = splitter[j].trim();
        }
        if (j === 1) {
          processedData.name = splitter[j].trim();
        }
        if (j === 2) {
          processedData.qty = parseInt(splitter[j].trim());
        }
        if (j === 3) {
          processedData.expires = splitter[j].trim();
        }
        if (j === 4) {
            processedData.zone = splitter[j].trim();
        }
      }
      if (!processedData.zone || processedData.zone.trim() === "") {
        processedData.zone = "general";
      }
      shipmentData.push(processedData);
    }
    return shipmentData;
}

let shipment = parseShipment(rawData);

function planRestock(pantry, shipment) {
  const stockAction = [];
  
  for (let i = 0; i < shipment.length; i++) {
    let action = {};
    let sameValue = false;

    if (shipment[i].qty <= 0) {
      action.type = "discard"
    } else {
      for (const skuValue in pantry) {
        if (pantry[skuValue].sku === shipment[i].sku) {
          sameValue = true;
          action.type = "restock"
          break
        } 
      }
      if (sameValue === false) {
        action.type = "donate";
      }
    }
    action.item = shipment[i];
    stockAction.push(action);
  }
  return stockAction;
}

function groupByZone(actions) {
  const groupedZones = {};
  for (let i = 0; i < actions.length; i++) {
    let zoneName = actions[i].item.zone;
      if (!groupedZones[zoneName]) {
        groupedZones[zoneName] = [];
      }
      groupedZones[zoneName].push(actions[i]);
  }
  return groupedZones;
}

function clonePantry(pantry) {
  const pantryCopy = JSON.parse(JSON.stringify(pantry));

  return pantryCopy;
}

const rawData = [
  "sku1, Apples, 4, 2026-01-15, A1",
  "sku22, Bananas, 0, 2026-02-10, B2",
  "sku3, Mangoes, 3, 2026-03-01, A1"
];


const pantry = [
  {
    sku: "sku1",
    name: "Apples",
    qty: 5,
    expires: "2025-12-20",
    zone: "A1"
  },
  {
    sku: "sku4",
    name: "Rice",
    qty: 10,
    expires: "2027-01-01",
    zone: "C3"
  }
];

const pantryCopy = clonePantry(pantry);
const shipmentData = parseShipment(rawData);
const stockAction = planRestock(pantryCopy, shipmentData);
console.log(groupByZone(stockAction));*/
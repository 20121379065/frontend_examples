var sum = 0,
    currentPercentageComplete = 0,
    MAX_LIMIT = 10000000000;

for (var j=0; j != MAX_LIMIT; ++j) {
	sum += j;
	newPercentageComplete = Math.round((j/MAX_LIMIT)*100)
    if(newPercentageComplete > currentPercentageComplete) {
    	postMessage(newPercentageComplete + '%')
    	currentPercentageComplete = newPercentageComplete

    }
}

postMessage('Sum is ' + sum)

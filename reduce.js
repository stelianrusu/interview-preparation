function countWords(inputWords) {
    // SOLUTION GOES HERE
    console.log(inputWords);

    return inputWords.reduce(function (result, word) {
        if (!result[word])
            result[word] = 1;
        else
            result[word]++;
        return result;
    }, {});
}

module.exports = countWords
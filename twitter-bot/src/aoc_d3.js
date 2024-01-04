function day3part1() {
    var linesAsArray = testInput.split('\n')
    var symbolsArr = []
    var symbolLocations = new Map()

    // console.log(mapPractice.get(2).includes(3))

    const xbound = linesAsArray[0].length
    const ybound = linesAsArray.length-1

    // create map with all symbol locations
    for(var line in  linesAsArray) {
        var actualLine = linesAsArray[line] 
        for(var char in actualLine){
            if(actualLine[char].search(/\d/g) && actualLine[char] != '.') { // stopped at identifying the locations of symbols --check logs
                symbolLocations.set(line, char)
                console.log('added ' + line + ' ' + char)
            }
        }
    }
}

const testInput = 
'467..114..\n' +
'...*......\n' +
'..35..633.\n' +
'......#...\n' +
'617*......\n' +
'.....+.58.\n' +
'..592.....\n' +
'......755.\n' +
'...$.*....\n' +
'.664.598..\n'

day3part1()
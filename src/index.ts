import { CsvFileReader } from './CsvReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResults';

//object satisfying data reader interface
const csvFileReader = new CsvFileReader('football.csv')
//then the instance of match reader with something satisfying dataReader interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches){
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++
    }else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
        manUnitedWins++
    }
}

console.log(`Man United won ${manUnitedWins} games`)
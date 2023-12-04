import input from './input';
export const isPossible = (input) => {
    const rounds = input.split('; ');
    for(let i = 0; i < rounds.length; i++) {
        let colourTotals = {
            red: 0,
            green: 0,
            blue: 0,
        }
        // only 12 red cubes, 13 green cubes, and 14 blue cubes

        const round = rounds[i];
        const moves = round.split(', ');
        for(let j = 0; j < moves.length; j++) {
            const move = moves[j];
            const [num, colour] = move.split(' ');
            colourTotals[colour] = (colourTotals[colour] || 0) + num;
            // console.log({num, colour, move, colourTotals});
            if (colourTotals.red > 12 || colourTotals.green > 13 || colourTotals.blue > 14) {
                return false;
            }
        }
    }
    return true;
};

export const part1 = (input) => {
    const games = input.split('\n');
    let possibleTotal = 0;
    for(let i = 0; i < games.length; i++) {
        const game = games[i];
        const [gameNo, moves] = game.split(': ');
        // console.log({gameNo, moves});
        if(isPossible(moves)) {
            const [id] = gameNo.match(/\d+/g)
            possibleTotal += Number(id);
        }
    }
    return possibleTotal;
};

const output = part1(input);
console.log(`output is ${output}`);
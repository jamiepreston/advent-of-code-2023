import input from './input';

export const getPower = (input) => {
    const rounds = input.split('; ');
    let gameColourTotals = {
        red: 0,
        green: 0,
        blue: 0,
    }
    rounds.forEach(round => {
        let roundColourTotals = {
            red: 0,
            green: 0,
            blue: 0,
        }

        const moves = round.split(', ');
        moves.forEach(move => {
            const [num, colour] = move.split(' ');
            roundColourTotals[colour] = (roundColourTotals[colour] || 0) + Number(num);
            // console.log({num, colour,roundColourTotals});
            
        });
        if (roundColourTotals.red > gameColourTotals.red) { gameColourTotals.red = roundColourTotals.red; }
        if (roundColourTotals.green > gameColourTotals.green) { gameColourTotals.green = roundColourTotals.green; }
        if (roundColourTotals.blue > gameColourTotals.blue) { gameColourTotals.blue = roundColourTotals.blue; }
    });
    return gameColourTotals.red * gameColourTotals.green * gameColourTotals.blue;
};

export const part2 = (input) => {
    const games = input.split('\n');
    let powerTotal = 0;
    games.forEach(game => {
        const moves = game.split(': ')[1];
        const gamePower = getPower(moves);
        powerTotal += gamePower;
    });
    return powerTotal;
};

const output = part2(input);
console.log(`output is ${output}`);
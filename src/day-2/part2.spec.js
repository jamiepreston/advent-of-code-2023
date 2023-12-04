import { part2, getPower } from './part2';

describe('day2', () => {
    describe('part2', () => {
        it('should parse the entire test input', () => {
            const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;
            const result = part2(input);
            expect(result).toEqual(2286);
        });
    
        describe('getPower', () => {
            it('should return the power of game 1', () => {
                const input = `3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green`;
                const result = getPower(input);
                // In game 1, the game could have been played with as few as 4 red, 2 green, and 6 blue cubes. If any color had even one fewer cube, the game would have been impossible.
                expect(result).toEqual(48);
            })
            it('should return the power of game 3', () => {
                const input = `8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red`;
                const result = getPower(input);
                // Game 3 must have been played with at least 20 red, 13 green, and 6 blue cubes.
                expect(result).toEqual(1560);
            })
        })
    })
});

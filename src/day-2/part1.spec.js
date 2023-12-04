import { part1, isPossible } from './part1';

describe('day2', () => {
    describe('part1', () => {
        it('should parse the entire test input', () => {
            const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;
            const result = part1(input);
            expect(result).toEqual(8);
        });
    
        describe('isPossible', () => {
            it('should return true for a possible input', () => {
                const input = `3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green`;
                const result = isPossible(input);
                expect(result).toBe(true);
            })
            it('should return false for an impossible input', () => {
                const input = `8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red`;
                const result = isPossible(input);
                expect(result).toBe(false);
            })
        })
    })
});

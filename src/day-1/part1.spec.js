import {getPart, getPartV2} from './part1';

describe('part1', () => {
    describe('getPart (part1)', () => {
        it('should pass the test input', () => {
            const input = '1abc2';
            const result = getPart(input);
            expect(result).toEqual(12);
        })
        it('should pass the test input', () => {
            const input = 'pqr3stu8vwx';
            const result = getPart(input);
            expect(result).toEqual(38);
        })
        it('should pass the test input', () => {
            const input = 'a1b2c3d4e5f';
            const result = getPart(input);
            expect(result).toEqual(15);
        })
        it('should pass the test input', () => {
            const input = 'treb7uchet';
            const result = getPart(input);
            expect(result).toEqual(77);
        })
    })
    describe('getPartV2 (part2)', () => {
        it('should pass the test input', () => {
            const input = 'two1nine';
            const result = getPartV2(input);
            expect(result).toEqual(29);
        })
        it('should pass the test input', () => {
            const input = 'eightwothree';
            const result = getPartV2(input);
            expect(result).toEqual(83);
        })
        it('should pass the test input', () => {
            const input = 'abcone2threexyz';
            const result = getPartV2(input);
            expect(result).toEqual(13);
        })
        it('should pass the test input', () => {
            const input = 'xtwone3four';
            const result = getPartV2(input);
            expect(result).toEqual(24);
        })
        it('should pass the test input', () => {
            const input = '4nineeightseven2';
            const result = getPartV2(input);
            expect(result).toEqual(42);
        })
        it('should pass the test input', () => {
            const input = 'zoneight234';
            const result = getPartV2(input);
            expect(result).toEqual(14);
        })
        it('should pass the test input', () => {
            const input = '7pqrstsixteen';
            const result = getPartV2(input);
            expect(result).toEqual(76);
        })
        it('should pass the test input', () => {
            const input = '1abc2';
            const result = getPartV2(input);
            expect(result).toEqual(12);
        })
        it('should pass the test input', () => {
            const input = 'pqr3stu8vwx';
            const result = getPartV2(input);
            expect(result).toEqual(38);
        })
        it('should pass the test input', () => {
            const input = 'a1b2c3d4e5f';
            const result = getPartV2(input);
            expect(result).toEqual(15);
        })
        it('should pass the test input', () => {
            const input = 'treb7uchet';
            const result = getPartV2(input);
            expect(result).toEqual(77);
        })
    })
});

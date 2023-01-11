import { convertSecondsToString } from "@lib/timer/timerUtils";
import { expect } from '@jest/globals'

describe('converts seconds to minutes and seconds', () => {
    it('properly convert negative seconds', () => {
        expect(convertSecondsToString(-1)).toBe('00:00');
    });

    it('properly converts 0 seconds', () => {
        expect(convertSecondsToString(0)).toBe('00:00');
    });

    it('properly converts single digit minutes and seconds', () => {
        expect(convertSecondsToString(61)).toBe('01:01');
    });

    it('properly converts single digit minutes and double digit seconds', () => {
        expect(convertSecondsToString(71)).toBe('01:11');
    });

    it('properly converts double digit minutes and single digit seconds', () => {
        expect(convertSecondsToString(601)).toBe('10:01');
    });

    it('properly converts double digit minutes and seconds', () => {
        expect(convertSecondsToString(611)).toBe('10:11');
    });

    it('properly converts zero minutes and non-zero seconds', () => {
        expect(convertSecondsToString(45)).toBe('00:45');
    });

    it('properly converts non-zero minutes and zero seconds', () => {
        expect(convertSecondsToString(60)).toBe('01:00');
    });
});
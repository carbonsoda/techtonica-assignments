const ex3 = require('../runtimeEx3.js');


// mostFrequent
describe('mostFrequent:', () => {
    it('mostFrequent([1, 4, 5, 4, 2, 2, 4]) should return 4', () => {
        expect(ex3.mostFrequent([1, 4, 5, 4, 2, 2, 4])).toBe(4);
    });
});

// greatestDiff
describe('greatestDiff: an int array', () => {
    it('greatestDiff([1, 5, 3, 1, 15] should return 14', () => {
        expect(ex3.greatestDiff([1, 5, 3, 1, 15])).toBe(14);
    });
    it('greatestDiff([1]) should return -1', () => {
        expect(ex3.greatestDiff([1])).toBe(-1);
    });
    it('empty arr should return -1', () => {
        expect(ex3.greatestDiff([])).toBe(-1);
    });
    
});


// singleOccurrence
describe('singleOccurrence:', () => {
    it('singleOccurrence([3, 5, 3, 4, 6, 6, 4]) should return 5', () => {
        expect(ex3.singleOccurrence([3, 5, 3, 4, 6, 6, 4])).toBe(5);
    });
});

// commonIntegers
describe('commonIntegers:', () => {
    it('commonIntegers([1, 3, 2, 5], [3, 9, 8, 1]) should return [1,3]', () => {
        expect(ex3.commonIntegers([1, 3, 2, 5], [3, 9, 8, 1])).toBe([1, 3]);
    });
});

// anagrams
describe('Anagrams: 2 strings', () => {
    it('consisting of same letters should be true', () => {
        expect(ex3.anagrams('cat', 'act')).toBe(true);
    });
    it('that share letters but unequal amounts should be false', () => {
        expect(ex3.anagrams('at', 'tat')).toBe(true);
    });
    it('that share no letters should be false', () => {
        expect(ex3.anagrams('cat', 'act')).toBe(true);
    });
});


// uniqueChars
describe('uniqueChars: A string', function () {

    it('containing two or more duplicates should be false', () => {
        expect(ex3.uniqueChars('bananas')).toBe(false);
    });

    it('only unique letters should be true',
        () => {
            expect(ex3.uniqueChars('bacon')).toBe(true);
        });
});


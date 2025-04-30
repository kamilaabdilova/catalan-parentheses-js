const { countWellFormedParenthesis } = require('./index');

test('small values', () => {
    expect(countWellFormedParenthesis(1)).toBe(1);
    expect(countWellFormedParenthesis(2)).toBe(2);
    expect(countWellFormedParenthesis(3)).toBe(5);
    expect(countWellFormedParenthesis(4)).toBe(14);
    expect(countWellFormedParenthesis(5)).toBe(42);
});

test('edge cases', () => {
    expect(countWellFormedParenthesis(0)).toBe(1);
    expect(countWellFormedParenthesis(6)).toBe(132);
    expect(countWellFormedParenthesis(7)).toBe(429);
});

test('maximum input', () => {
    expect(countWellFormedParenthesis(15)).toBe(9694845);
});
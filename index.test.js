const { countWellFormedParenthesis } = require('./index');

test('small values', () => {
    expect(countWellFormedParenthesis(1)).toBe(1);
    expect(countWellFormedParenthesis(2)).toBe(2);
    expect(countWellFormedParenthesis(3)).toBe(5);
    expect(countWellFormedParenthesis(4)).toBe(14);
    expect(countWellFormedParenthesis(5)).toBe(42);
});

test('edge cases', () => {
    expect(countWellFormedParenthesis(0)).toBe(0);
    expect(countWellFormedParenthesis(6)).toBe(132);
    expect(countWellFormedParenthesis(7)).toBe(429);
});

test('maximum input', () => {
    expect(countWellFormedParenthesis(15)).toBe(9694845);
});

test('производительность: должна завершиться менее чем за 500 мс для n = 15', () => {
    const start = Date.now();
    const result = countWellFormedParenthesis(15);
    const duration = Date.now() - start;

    expect(result).toBe(9694845);
    expect(duration).toBeLessThan(500); // 500ms — допустимый порог
});
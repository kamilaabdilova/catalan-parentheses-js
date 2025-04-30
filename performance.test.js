const { countWellFormedParenthesis } = require('./index');

test('производительность: должна завершиться менее чем за 500 мс для n = 15', () => {
    const start = Date.now();
    const result = countWellFormedParenthesis(15);
    const duration = Date.now() - start;

    expect(result).toBe(9694845);
    expect(duration).toBeLessThan(500); // 500ms — допустимый порог
});
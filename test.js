const { fromEuroToDollar, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(expected);
})

test("One dollar should be ",function() {
    const expected = (3.5 / 1.07) * 156.5;
    expect(fromDollarToYen(3.5)).toBe(expected);
})

test("One yen should be 0.019 pound", () => {
    const expected = (3.5 / 156.5) * 0.87;
    expect(fromYenToPound(3.5)).toBe(expected);
})  


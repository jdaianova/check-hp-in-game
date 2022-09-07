import checkHP from '../checkhp';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 30 }, 'wounded'],
  [{ name: 'Маг', health: 0 }, 'critical'],
  [{ name: 'Маг', health: 16 }, 'wounded'],
  [{ name: 'Маг', health: 72 }, 'healthy'],
  [{ name: 'Маг', health: 1 }, 'critical'],
])(('cheking HP for %s'), (char, expected) => {
  const result = checkHP(char);
  expect(result).toBe(expected);
});

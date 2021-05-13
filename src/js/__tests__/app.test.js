import demo from '../app';

test('demo should return argument', () => {
  expect(demo('test')).toBe('test');
});

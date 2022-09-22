/* eslint-disable*/
import calculate from '../components/logic/calculate';

// This file is testing both of the calculate and the operate functions,
// because the calculate functions depend on the operate functions to work
test('test addition', () => {
  const obj = {
    total: '15',
    next: '5',
    operation: '+',
  };
  expect(calculate(obj, "=").total).toBe("20");
});

test('test subtraction', () => {
  const obj = {
    total: '15',
    next: '5',
    operation: '-',
  };
  expect(calculate(obj, "=").total).toBe("10");
});

test('test multiplication', () => {
  const obj = {
    total: '15',
    next: '5',
    operation: '×',
  };
  expect(calculate(obj, "=").total).toBe("75");
});

test('test division', () => {
  const obj = {
    total: '15',
    next: '5',
    operation: '÷',
  };
  const obj2 = {
    total: '15',
    next: '0',
    operation: '÷',
  };
  expect(calculate(obj, "=").total).toBe("3");
  expect(calculate(obj2, "=").total).toBe("Can't divide by 0.");
});

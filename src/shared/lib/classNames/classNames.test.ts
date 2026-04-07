import { describe, expect, test } from 'vitest';

import { classNames } from './classNames';

describe('classNames', () => {
  test('should work with one argument', () => {
    expect(classNames('class1')).toBe('class1');
  });

  test('should work with multiple arguments', () => {
    expect(classNames('class1', 'class2', 'class3')).toBe(
      'class1 class2 class3',
    );
  });

  test('should work with conditional arguments', () => {
    expect(classNames('class1', { class2: true })).toBe('class1 class2');
    expect(classNames('class1', { class2: false })).toBe('class1');
  });

  test('should work with undefined, null and empty string', () => {
    expect(classNames('class1', undefined, null, '', 'class2')).toBe(
      'class1 class2',
    );
  });
});

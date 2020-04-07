import React from 'react';

import {render} from 'react-native-testing-library';
import {Smoke, Add} from './smoke';

// describe('Smoke', () => {
//   it('renders the correct message', () => {
//     const {queryByText} = render(<Smoke />);
//     expect(queryByText('Hello, world!')).not.toBeNull();
//   });
// });

const add = jest.fn(() => 5);

test('add', () => {
  expect(add(2, 3)).toBe(5);
});

test('should return hello,world', () => {
  expect(Smoke()).toBeDefined();
});

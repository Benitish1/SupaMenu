import * as React from 'react';
import { render, screen } from '@testing-library/react-native';

import { ThemedText } from '../core/ThemedText';

it(`renders correctly`, async () => {
  await render(<ThemedText>Snapshot test!</ThemedText>);

  expect(screen.getByText('Snapshot test!')).toBeTruthy();
});

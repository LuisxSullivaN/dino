import { render } from '@testing-library/react';

import Cactus from './cactus';

describe('Cactus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cactus />);
    expect(baseElement).toBeTruthy();
  });
});

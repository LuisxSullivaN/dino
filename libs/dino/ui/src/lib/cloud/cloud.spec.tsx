import { render } from '@testing-library/react';

import Cloud from './cloud';

describe('Cloud', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cloud />);
    expect(baseElement).toBeTruthy();
  });
});

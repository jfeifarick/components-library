import { render } from '@testing-library/react';

import MyNewLibrary from './my-new-library';

describe('MyNewLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyNewLibrary />);
    expect(baseElement).toBeTruthy();
  });
});

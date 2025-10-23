import { render } from '@testing-library/react';

import OctoniteWorkspaceUiReact from './ui-react';

describe('OctoniteWorkspaceUiReact', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<OctoniteWorkspaceUiReact />);
    expect(baseElement).toBeTruthy();
  });
  
});

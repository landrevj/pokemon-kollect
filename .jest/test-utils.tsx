import React from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../src/redux';

// https://stackoverflow.com/a/61452184
const render = (ui: React.ReactElement, renderOptions?: RenderOptions) => {
  const Wrapper: React.FC = ({ children }) => {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render };

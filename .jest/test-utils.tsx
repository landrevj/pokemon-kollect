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

/**
 * mockNextUseRouter
 * Mocks the useRouter React hook from Next.js on a test-case by test-case basis.
 * @see https://github.com/vercel/next.js/issues/7479#issuecomment-587145429
 */
const useRouter = jest.spyOn(require("next/router"), "useRouter");

export function mockUseRouter(
  props: {
    route: string;
    pathname: string;
    query: string | { [key: string]: string };
    asPath: string;
  }
)
{
  useRouter.mockImplementation(() => ({
    route: props.route,
    pathname: props.pathname,
    query: props.query,
    asPath: props.asPath,
    prefetch: jest.fn(),
  }));
}

export * from '@testing-library/react';
export { render };


// next/image freaks out about statically imported files while running jest so we mock it
function FakeImage({ src, alt }: { src?: string, alt?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} />;
}
jest.mock("next/image", () => FakeImage);

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { fetchArrayToJson } from '../utils';

export const handlers = [
  rest.get('/endpoint/:number', ({ params: { number } }, res, ctx) => {
    return res(ctx.json(`${number} response`), ctx.delay(150));
  })
];

const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe('fetchArrayToJson', () => {

  it('properly fetches data and returns it in the correct format', async () => {
    const inArray = ['/endpoint/a', '/endpoint/b', '/endpoint/c', '/endpoint/d', '/endpoint/e'];
    const outArray = ['a response', 'b response', 'c response', 'd response', 'e response'];
    
    const response = await fetchArrayToJson<string>(inArray);

    expect(response).toEqual(outArray);
  });

});

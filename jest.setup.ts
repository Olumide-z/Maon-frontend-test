// jest.setup.ts (must be .ts if you're using `jest.config.ts`)
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder as any;
global.TextDecoder = TextDecoder as any;
import '@testing-library/jest-dom';
import 'whatwg-fetch';

import { server } from './__mocks__/servers';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

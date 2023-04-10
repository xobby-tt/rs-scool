import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import fetch from 'node-fetch';

global.fetch = fetch as any;

expect.extend(matchers);

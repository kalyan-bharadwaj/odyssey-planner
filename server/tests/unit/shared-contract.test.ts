// Smoke test: proves the server toolchain (tsx / vitest) resolves @odyssey/shared.
import { idParamSchema, paginationQuerySchema } from '@odyssey/shared';

import { describe, it, expect } from 'vitest';

describe('@odyssey/shared resolves in the server toolchain', () => {
  it('imports and uses a shared schema', () => {
    expect(idParamSchema.parse('7')).toBe(7);
    expect(paginationQuerySchema.parse({})).toEqual({ page: 1, perPage: 50 });
  });
});

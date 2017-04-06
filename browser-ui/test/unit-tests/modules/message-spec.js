import assert from 'assert';

import message from '../../../src/modules/message';

describe('message', function() {
  it('should equal "Loaded"', function() {
    assert.equal('Loaded', message);
  });
});

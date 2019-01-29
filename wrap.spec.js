const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Splits a string after the given number of characters', () => {
    expect(wrap('abcdef', 3)).to.equal('abc\ndef');
    expect(wrap('abcdefghijklmnopqrstuvwxyz', 5)).to.equal(
      'abcde\nfghij\nklmno\npqrst\nuvwxy\nz'
    );
  });
  it('Splits a string of text only at spaces', () => {
    expect(wrap('Lorem ipsum dolor sit eu amet, elit na', 20)).to.equal(
      'Lorem ipsum dolor\nsit eu amet, elit na'
    );
  });
});

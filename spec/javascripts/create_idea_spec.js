var expect = chai.expect;

describe('isTrue()', function() {
  it('should be true if true', function() {
    expect(isTrue(true)).to.equal(true);
  });

  it('should be false if false', function() {
    expect(isTrue(false)).not.to.be.ok();
  });
});

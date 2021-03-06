var expect = require('chai').expect;
var plugin = require('..');

describe('plugin', function() {
  it('parses nvm@dc53a37 output', function() {
    var output = {
      stdout: new Buffer('   v0.7.12\n   v0.8.26\n   v0.9.12\n  v0.10.26\n  v0.10.28\n  v0.11.11\n  v0.11.12\n  v0.11.13\ncurrent: \tv0.10.26\n0.10 -> 0.10.26 (-> v0.10.26)\ndefault -> 0.10 (-> v0.10.26)\n')
    };
    expect(plugin._parseVersions(output)).to.eql([
      'v0.7.12',
      'v0.8.26',
      'v0.9.12',
      'v0.10.26',
      'v0.10.28',
      'v0.11.11',
      'v0.11.12',
      'v0.11.13'
    ]);
  });

  it('parses nvm@1ee708b output', function() {
    var output = {
      stdout: new Buffer('     v0.7.12\n     v0.8.26\n     v0.9.12\n->  v0.10.26\n    v0.10.28\n    v0.11.11\n    v0.11.12\n    v0.11.13\n      system\nstable -> 0.10 (-> v0.10.26) (default)\nunstable -> 0.11 (-> v0.11.13) (default)\n')
    };
    expect(plugin._parseVersions(output)).to.eql([
      'v0.7.12',
      'v0.8.26',
      'v0.9.12',
      'v0.10.26',
      'v0.10.28',
      'v0.11.11',
      'v0.11.12',
      'v0.11.13'
    ]);
  });
});

if (typeof module !== 'undefined' && module.exports) { // Node.js
    var expect = require('chai').expect;
    var sinon = require('sinon');
    var JsPackageSample = require('../src/index');

    var jsdom = require('jsdom');
    var window = jsdom.jsdom('<html><head></head><body>hello world</body></html>').defaultView;
    var navigator = window.navigator;
} else {
    var expect = chai.expect;
}
var jsPackageSample = new JsPackageSample();

describe('JS Package Sample', function() {
    it('setUserAgent function', function() {
        expect(jsPackageSample.setUserAgent('test')).to.equal(undefined);
    });
    it('getUserAgent function', function() {
        jsPackageSample.setUserAgent('test');
        expect(jsPackageSample.getUserAgent()).to.equal('test');
    });
});

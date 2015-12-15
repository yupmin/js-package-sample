if (typeof module !== 'undefined' && module.exports) { // Node.js
    var expect = require('chai').expect;
    var sinon = require('sinon');
    var jsdom = require('jsdom');
    // var window = jsdom.jsdom(
    //     '<html><head></head><body>hello world</body></html>'
    // ).defaultView;
    // var navigator = window.navigator;

    var JsPackageSample = require('../src/index');
} else {
    var expect = chai.expect;
}


describe('JS Package Sample', function() {
    it('setUserAgent function', function() {
        expect(JsPackageSample.setUserAgent('test')).to.equal(undefined);
    });

    it('getUserAgent function', function() {
        JsPackageSample.setUserAgent('test');
        expect(JsPackageSample.getUserAgent()).to.equal('test');
    });
});

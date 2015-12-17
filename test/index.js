var expect;

if (typeof module !== 'undefined' && module.exports) { // Node.js
    var sinon = require('sinon'),
        jsdom = require('jsdom');

    expect = require('chai').expect;

    GLOBAL.window = jsdom.jsdom(
         '<html><head></head><body>hello world</body></html>'
     ).defaultView;

    var JsPackageSample = require('../src/index');
} else {
    expect = chai.expect;
}

describe('JS Package Sample', function() {
    it('setUserAgent function', function() {
        expect(JsPackageSample.setUserAgent('test')).to.equal(undefined);
    });

    it('getUserAgent function', function() {
        JsPackageSample.setUserAgent('test');
        expect(JsPackageSample.getUserAgent()).to.equal('test');
    });

    it('timerGetUserAgent function', function(done) {
        JsPackageSample.setUserAgent('test');
        JsPackageSample.timerGetUserAgent(function(err, res) {
            expect(res).to.equal('test');
            done();
        });
    });

    it('repeaterGetUserAgent function', function(done) {
        JsPackageSample.setUserAgent('test');
        JsPackageSample.repeaterGetUserAgent(function(err, res) {
            expect(res).to.equal('test');
            clearInterval(JsPackageSample.getRepeaterId());
            done();
        });
    });
});

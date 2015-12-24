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

    it('jQuery has ajax?', function() {
        expect(jQuery.ajax).to.not.undefined;
    });
});

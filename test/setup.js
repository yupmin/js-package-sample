// Export modules to global scope as necessary (only for testing)
if (typeof process !== 'undefined') {
    // We are in node. Require modules.
    expect = require('chai').expect;
    sinon = require('sinon');
    jsdom = require('jsdom');
    window = jsdom.jsdom(
        '<html><head></head><body>hello world</body></html>'
    ).defaultView;
    jQuery = require('jquery');
    JsPackageSample = require('..');
    isBrowser = false;
} else {
    // We are in the browser. Set up variables like above using served js files.
    expect = chai.expect;
    // num and sinon already exported globally in the browser.
    isBrowser = true;
}

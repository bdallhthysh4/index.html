var _0x4b8c=['d2luZG93LmxvY2F0aW9uLmhvc3RuYW1l','YWxsb3dlZERvbWFpbnMuc29tZQ==','Y3VycmVudERvbWFpbiA9PT0gZG9tYWlu','Y3VycmVudERvbWFpbi5lbmRzV2l0aCgnLicgKyBkb21haW4p','Y3VycmVudERvbWFpbi5pbmNsdWRlcyhkb21haW4ucmVwbGFjZSgnd3d3LicsICcnKSk=','aGlrYXl0bmEubXk=','d3d3Lmhpa2F5dG5hLm15','aGlrYXl0bmEuYmxvZ3Nwb3QuY29t','bG9jYWxob3N0','Y29uc29sZQ==','ZXJyb3I=','Ym9keQ==','aW5uZXJIVE1M','dGhyb3c=','RXJyb3I='];
(function(_0x4a8b2d, _0x4b8c2e) {
    var _0x5a3f4a = function(_0x2d8c3f) {
        while (--_0x2d8c3f) {
            _0x4a8b2d['push'](_0x4a8b2d['shift']());
        }
    };
    _0x5a3f4a(++_0x4b8c2e);
}(_0x4b8c, 0x1e6));

var _0x4a8b = function(_0x4a8b2d, _0x4b8c2e) {
    _0x4a8b2d = _0x4a8b2d - 0x0;
    var _0x5a3f4a = _0x4b8c[_0x4a8b2d];
    return _0x5a3f4a;
};

(function() {
    const allowedDomains = [
        _0x4a8b('0x0'),  // hikaytna.my
        _0x4a8b('0x1'),  // www.hikaytna.my
        _0x4a8b('0x2'),  // hikaytna.blogspot.com
        _0x4a8b('0x3')   // localhost
    ];
    
    const currentDomain = window[_0x4a8b('0x4')];
    const isAllowed = allowedDomains[_0x4a8b('0x5')](domain => 
        eval(_0x4a8b('0x6')) || 
        eval(_0x4a8b('0x7')) ||
        eval(_0x4a8b('0x8'))
    );
    
    if (!isAllowed) {
        window[_0x4a8b('0x9')][_0x4a8b('0xa')](_0x4a8b('0xb'));
        document[_0x4a8b('0xc')][_0x4a8b('0xd')] = `
            <div style="background:#050505; color:#fff; font-family:Cairo; text-align:center; padding:50px; min-height:100vh; display:flex; align-items:center; justify-content:center;">
                <div style="max-width:500px;">
                    <h1 style="color:#e50914; font-size:40px; margin-bottom:20px;">⛔ غير مصرح</h1>
                    <p style="font-size:18px; color:#aaa;">هذا الموقع غير مصرح له بالمشاهدة. يرجى زيارة الموقع الرسمي.</p>
                    <p style="font-size:14px; color:#666; margin-top:30px;">hikaytna.my</p>
                </div>
            </div>
        `;
        throw new _0x4a8b('0xe')('نطاق غير مصرح');
    }
    
    console[_0x4a8b('0x9')]('✅ النطاق مصرح به');
})();

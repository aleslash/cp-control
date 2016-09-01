
module.exports = function (app){
    app.get('/peludos', function(req, res) {
        res.send(
            [
                {
                    peludo:'Alexandre',
                    funcional:'001234567',
                    racf:'aaaaaaa'
                }
            ]);
    });

    app.get('/peludos/:funcional', function(req, res) {
        var funcional = req.params.funcional
        console.log('funcional:' + funcional);
        res.send({
                    peludo:'Alexandre',
                    funcional:'001234567',
                    racf:'aaaaaaa'
                });
    });
    return app;
}

module.exports = function (app){
    app.get('/momentos_peludos', function(req, res) {
        res.send(
            [
                {
                    peludo:'Alexandre',
                    funcional:'001234567',
                    racf:'aaaaaaa'
                }
            ]);
    });

    app.get('/momentos_peludos/:idMomento', function(req, res) {
        var idMomento = req.params.idMomento
        console.log('idMomento:' + idMomento);
    });
    return app;
}
var guid = require('guid');

module.exports = function (app){
    app.get('/momentos_peludos', function(req, res) {
        res.send(
            [
                {
                    peludo:{
                        nome:'Alexandre',
                        funcional:'001234567',
                        racf:'aaaaaaa'
                    },
                    data_e_hora: (new Date).toJSON(),
                    delator:{
                        nome:'Alexandre',
                        funcional:'001234567',
                        racf:'aaaaaaa'
                    },
                    idMomento: guid.raw()
                }
            ]);
    });

    app.get('/momentos_peludos/:idMomento', function(req, res) {
        var idMomento = req.params.idMomento
        console.log('idMomento:' + idMomento);
        res.send({
                    peludo:{
                        nome:'Alexandre',
                        funcional:'001234567',
                        racf:'aaaaaaa'
                    },
                    data_e_hora: (new Date).toJSON(),
                    delator:{
                        nome:'Alexandre',
                        funcional:'001234567',
                        racf:'aaaaaaa'
                    },
                    idMomento: guid.raw()
                });
    });

    app.post('/momentos_peludos', function(req, res) {
        
    });
    return app;
}
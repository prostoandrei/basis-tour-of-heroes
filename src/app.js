var Node = require('basis.ui').Node;
var router = basis.require('basis.router');

var pages = require('./app/pages/index');

var page = router
    .route(':page')
    .param('page')
    .as(function(page) {
        return pages[page] || pages[''];
    });

module.exports = require('basis.app').create({
    title: 'Basis tour of heroes',
    init: function () {
        return new Node({
            template: resource('./app/template/layout.tmpl'),
            binding: {
                content: page.value
            }
        });
    }
});

router.start();

var Node = require('basis.ui').Node;
var List = require('./app/components/hero-list/index');
var Details = require('./app/components/hero-details/index');

module.exports = require('basis.app').create({
    title: 'Basis tour of heroes',
    init: function () {
        return new Node({
            template: resource('./app/template/layout.tmpl'),
            binding: {
                list: List,
                details: Details
            },
        });
    }
});

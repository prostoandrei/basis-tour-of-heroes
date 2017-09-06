var Node = require('basis.ui').Node;
var Hero = require('./app/components/hero/index');

module.exports = require('basis.app').create({
    title: 'Basis tour of heroes',
    init: function () {
        return new Node({
            template: resource('./app/template/layout.tmpl'),
            childClass: Hero,
            childNodes: [
                { id: 1, title: 'Headcrab' },
                { id: 2, title: 'Magnetto' },
                { id: 3, title: 'Cyclop' },
                { id: 4, title: 'Batman' },
                { id: 5, title: 'Superman' },
                { id: 6, title: 'Storm' },
                { id: 7, title: 'Flash' },
                { id: 8, title: 'Wolverine' }
            ]
        });
    }
});

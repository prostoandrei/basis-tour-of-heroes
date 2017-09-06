var Node = require('basis.ui').Node;
var Hero = require('../hero/index');

module.exports = new Node({
    template: resource('./templates/hero-list.tmpl'),
    childClass: Hero,
    selection: true,
    childNodes: [
        { data: { id: 1, title: 'Headcrab' } },
        { data: { id: 2, title: 'Magnetto' } },
        { data: { id: 3, title: 'Cyclop' } },
        { data: { id: 4, title: 'Batman' } },
        { data: { id: 5, title: 'Superman' } },
        { data: { id: 6, title: 'Storm' } },
        { data: { id: 7, title: 'Flash' } },
        { data: { id: 8, title: 'Wolverine' } }
    ]
});

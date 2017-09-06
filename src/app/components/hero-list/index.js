var Node = require('basis.ui').Node;
var HeroNode = require('../hero/hero');

module.exports = new Node({
    template: resource('./templates/hero-list.tmpl'),
    childClass: HeroNode,
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

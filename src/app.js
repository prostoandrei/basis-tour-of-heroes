var Node = require('basis.ui').Node;
var Hero = require('./app/components/hero/index');
var DataObject = require('basis.data').Object;
var Dataset = require('basis.data').Dataset;

var dataset = new Dataset({
    items: [
        { id: 1, title: 'Headcrab' },
        { id: 2, title: 'Magnetto' },
        { id: 3, title: 'Cyclop' },
        { id: 4, title: 'Batman' },
        { id: 5, title: 'Superman' },
        { id: 6, title: 'Storm' },
        { id: 7, title: 'Flash' },
        { id: 8, title: 'Wolverine' }
    ].map(function (value) {
        return new DataObject({
            data: {
                id: value.id,
                title: value.title
            }
        });
    })
});

module.exports = require('basis.app').create({
    title: 'Basis tour of heroes',
    init: function () {
        return new Node({
            template: resource('./app/template/layout.tmpl'),
            childClass: Hero,
            dataSource: dataset
        });
    }
});

// setTimeout(function() {
//     dataset.remove(dataset.pick());
// }, 1000)



var Node = require('basis.ui').Node;
var DataObject = require('basis.data').Object;
var dataset = require('../../mockData/heroes');

module.exports = new Node({
    template: resource('./templates/dashboard.tmpl'),
    childClass: {
        template: resource('./templates/dashboard-item.tmpl'),
        binding: {
            id: 'data:',
            title: 'data:',
        },
    },
    dataSource: dataset
});

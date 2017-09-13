var Node = require('basis.ui').Node;
var Hero = require('../hero/index');
var dataset = require('../../mockData/heroes');

module.exports = new Node({
    template: resource('./templates/hero-list.tmpl'),
    childClass: Hero,
    selection: true,
    dataSource: dataset
});

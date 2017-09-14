var Node = require('basis.ui').Node;
var Hero = require('../hero/index');
var Heroes = require('../../type').Hero;

module.exports = new Node({
    template: resource('./templates/hero-list.tmpl'),
    active: true,
    childClass: Hero,
    selection: true,
    dataSource: Heroes.all
});

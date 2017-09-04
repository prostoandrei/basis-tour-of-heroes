var Node = require('basis.ui').Node;
var Hero = require('../../type').Hero;
var HeroNode = require('../hero/hero');

for (var i = 1; i <= 8; i++) {
	Hero({ id: i, title: 'Title ' + i });
}

module.exports = new Node({
	template: resource('./templates/hero-list.tmpl'),
	childClass: HeroNode,
	dataSource: Hero.all
});

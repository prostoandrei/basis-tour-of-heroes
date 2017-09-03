var Node = require('basis.ui').Node;
var Hero = require('./app/type').Hero;
var HeroNode = require('./app/components/hero/hero');

for (var i = 1; i <= 8; i++) {
	Hero({ id: i,	title: 'Title ' + i });
}

module.exports = require('basis.app').create({
	title: 'Basis tour of heroes',
  init: function() {
    return new Node({
			template: resource('./app/template/layout.tmpl'),
			childClass: HeroNode,
			dataSource: Hero.all
    });
  }
});

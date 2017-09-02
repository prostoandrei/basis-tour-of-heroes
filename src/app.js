var Node = require('basis.ui').Node;
var Hero = require('./app/type').Hero;

for (var i = 1; i <= 8; i++) {
	Hero({ id: i,	title: 'Title ' + i });
}

var HeroNode = Node.subclass({
  template:
    `<li class="Article {selected}" event-click="select">
			<span class="badge">{id}</span> {title}
    </li>`,
  binding: {
    id: 'data:',
    title: 'data:',
  }
});

module.exports = require('basis.app').create({
  title: 'Basisjs tour of heroes',

  init: function() {
    return new Node({
			template: resource('./app/template/layout.tmpl'),
			childClass: HeroNode,
			dataSource: Hero.all
    });
  }
});

var Node = require('basis.ui').Node;

module.exports = require('basis.app').create({
  title: 'Basisjs tour of heroes',

  init: function(){
    return new Node({
			template: resource('./app/template/layout.tmpl'),
			data: {
				title: 'Basis tour of heroes',
				hero: {
					id: 1,
					name: 'Superhero'
				}
			},
			binding: {
				id: 'data:hero.id',
				name: 'data:hero.name',
				title: 'data:title'
			},
			action: {
				setName: function(e) {
					this.update({
						hero: {
							id: this.data.hero.id + 1,
							name: e.sender.value
						}
					})
				}
			}
    });
  }
});

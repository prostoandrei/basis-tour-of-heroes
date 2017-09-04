var Node = require('basis.ui').Node;

module.exports = new Node({
	template: resource('./templpates/hero-details.tmpl'),
	data: {
		id: 1,
		title: 'Superhero'
	},
	binding: {
		id: 'data:',
		title: 'data:',
	},
	action: {
		setHeroName: function(e) {
			this.update({
				hero: {
					id: this.data.hero.id,
					title: e.sender.value
				}
			});
		}
	}
});

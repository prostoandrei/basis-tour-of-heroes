var Node = require('basis.ui').Node;

var HeroDetailsNode = new Node({
    template: resource('./app/template/layout.tmpl'),
    data: {
        id: 1,
        title: 'Superhero'
    },
    binding: {
        id: 'data:',
        title: 'data:',
    },
    action: {
        setHeroName: function (e) {
            this.update({
                hero: {
                    id: this.data.hero.id,
                    title: e.sender.value
                }
            });
        }
    }
});

module.exports = HeroDetailsNode;

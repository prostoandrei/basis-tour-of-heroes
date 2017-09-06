var Node = require('basis.ui').Node;

module.exports = new Node({
    template: resource('./templpates/hero-details.tmpl'),
    binding: {
        id: 'data:',
        title: 'data:',
    },
    action: {
        update: function (e) {
            this.update({
                title: e.sender.value
            });
        }
    }
});

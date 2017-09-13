var Node = require('basis.ui').Node;
let Value = require('basis.data').Value;
let router = require('basis.router');
let currentPage = Value.from(router.route(':page').param('page'));

module.exports = new Node({
    template: resource('./templates/navigation.html'),
    childClass: {
        template: `
            <a href="{link}" class="{selected}" event-click="navigate">{title}</a>
        `,
        selected: currentPage.compute((node, page) => {
            return node.link == page
        }),
        binding: {
            title: 'title',
            link: 'link'
        },
        action: {
            navigate: function(e) {
                e.preventDefault();
                router.navigate(this.link);
            }
        }
    },
    childNodes: [
        { title: 'Dashboard', link: 'dashboard' },
        { title: 'Heroes', link: 'heroes' }
    ]
});

var Node = require('basis.ui').Node;
var DataObject = require('basis.data').Object;
var dataset = require('../../mockData/heroes');

module.exports = new Node({
    template: resource('./templates/dashboard.tmpl'),
    childClass: {
        template: `
            <a class="col-1-4">
                <div class="module hero">
                    <h4>{title}</h4>
                </div>
            </a>
        `,
        binding: {
            id: 'data:',
            title: 'data:',
        },
    },
    dataSource: dataset
});

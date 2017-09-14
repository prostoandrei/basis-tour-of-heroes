var Node = require('basis.ui').Node;
var DataObject = require('basis.data').Object;
var Heroes = require('../../type').Hero;

var Slice = require('basis.data.dataset').Slice;

var top3max = new Slice({
    source: Heroes.all,
    limit: 4
  });

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
    dataSource: top3max
});

console.log('Heroes.all', Heroes.all);

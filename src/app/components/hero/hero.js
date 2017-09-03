var Node = require('basis.ui').Node;

module.exports = Node.subclass({
	template:
	'<li>' +
		'<span class="badge">{id}</span> {title}' +
	'</li>',
	binding: {
	  id: 'data:',
	  title: 'data:',
	}
});

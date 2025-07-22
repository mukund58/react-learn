
let rootElement = document.getElementById('root');

const reactElement = {
	type: 'a',
	props: {
		href: 'https://mukund.xyz',
		_target: '_blank',
	},
	children: 'Visit mukund.xyz',
};


CreateReactElement(reactElement, rootElement);


function CreateReactElement(element, container) {
	const domElement = document.createElement(element.type);
	domElement.textContent = element.children;
        for (const prop in element.props) {
			if (prop === 'children') continue;
		domElement.setAttribute(prop, element.props[prop]);
	}
container.appendChild(domElement);
}

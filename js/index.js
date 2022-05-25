'use strict';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Overlay = React.createClass({
	displayName: 'Overlay',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'Overlay', style: { 'backgroundImage': 'url(' + this.props.image + ')' } },
			'Something'
		);
	}
});

var Container = React.createClass({
	displayName: 'Container',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'Container' },
			this.props.children
		);
	}
});

var WorkspaceInformation = React.createClass({
	displayName: 'WorkspaceInformation',

	render: function render() {

		if (this.props.duration > 1) {
			var duration = this.props.duration + ' dias';
		} else {
			var duration = this.props.duration + ' dia';
		}

		return React.createElement(
			'div',
			{ className: 'WorkspaceInformation' },
			React.createElement(
				'div',
				{ className: 'WorkspaceName' },
				this.props.name
			),
			React.createElement(
				'div',
				{ className: 'WorkspacePrice' },
				React.createElement(
					'div',
					{ className: 'Price' },
					this.props.price,
					' R$'
				),
				React.createElement(
					'div',
					{ className: 'Duration' },
					'/ ',
					duration
				)
			)
		);
	}
});

var WorkspaceMeta = React.createClass({
	displayName: 'WorkspaceMeta',

	render: function render() {

		if (this.props.people > 1) {
			var people = this.props.people + ' people';
		} else {
			var people = this.props.people + ' person';
		}

		return React.createElement(
			'div',
			{ className: 'WorkspaceMeta' },
			React.createElement(
				'div',
				{ className: 'Description' },
				'Reserve Por ',
				React.createElement(
					'strong',
					null,
					people
				)
			),
			React.createElement(
				'div',
				{ className: 'Dates' },
				React.createElement(
					'strong',
					null,
					'0'
				),
				' até ',
				React.createElement(
					'strong',
					null,
					'60'
				)
			)
		);
	}
});

var ImagePreview = React.createClass({
	displayName: 'ImagePreview',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'ImagePreview', style: { 'backgroundImage': 'url(' + this.props.image + ')' } },
			React.createElement(
				'div',
				{ className: 'WorkspaceOverview' },
				React.createElement(WorkspaceInformation, { name: 'Pousada do Pinhos, Pedra Azul - ES', price: this.props.price, duration: '1' }),
				React.createElement(WorkspaceMeta, { people: this.props.people })
			)
		);
	}
});

var OrderSummary = React.createClass({
	displayName: 'OrderSummary',

	render: function render() {

		
		if (this.props.duration > 1) {
			var duration = this.props.duration + ' dias';
		} else {
			var duration = this.props.duration + ' dia';
		}

		
		var initialTotal = this.props.duration * this.props.price;

		
		var discount = Math.floor(initialTotal / 100 * this.props.discount);

		
		var subTotal = initialTotal - discount;

		
		var tax = Math.floor(subTotal / 100 * this.props.tax);

		
		var total = subTotal + tax;

		return React.createElement(
			'div',
			{ className: 'OrderSummary' },
			React.createElement(
				'div',
				{ className: 'Title' },
				'Pedidos Reservas'
			),
			React.createElement(
				'table',
				null,
				React.createElement(
					'tr',
					null,
					React.createElement(
						'td',
						null,
						this.props.price,
						' x ',
						duration
					),
					React.createElement(
						'td',
						null,
						initialTotal,
						' R$'
					)
				),
				React.createElement(
					'tr',
					null,
					React.createElement(
						'td',
						null,
						'Descontos'
					),
					React.createElement(
						'td',
						null,
						discount,
						' R$'
					)
				),
				React.createElement(
					'tr',
					null,
					React.createElement(
						'td',
						null,
						'Subtotal'
					),
					React.createElement(
						'td',
						null,
						subTotal,
						' R$'
					)
				),
				React.createElement(
					'tr',
					null,
					React.createElement(
						'td',
						null,
						'Tx Serviço'
					),
					React.createElement(
						'td',
						null,
						tax,
						' R$'
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'Total' },
				React.createElement(
					'div',
					{ className: 'TotalLabel' },
					'Total'
				),
				React.createElement(
					'div',
					{ className: 'Amount' },
					total,
					' ',
					React.createElement(
						'small',
						null,
						'R$'
					)
				)
			)
		);
	}
});

var PaymentForm = React.createClass({
	displayName: 'PaymentForm',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'PaymentForm' },
			React.createElement(
				'form',
				{ onSubmit: this.props.onSubmit },
				React.createElement(
					'div',
					{ className: 'Title' },
					'Informação de Pagamento'
				),
				React.createElement(BasicInput, { name: 'name', label: 'Nome no Cartão', type: 'text', placeholder: 'Seu Nome' }),
				React.createElement(BasicInput, { name: 'card', label: 'Número do Cartão', type: 'number', placeholder: '0000 0000 0000 0000' }),
				React.createElement(ExpiryDate, null),
				React.createElement(CheckoutButton, null)
			)
		);
	}
});

var CheckoutButton = React.createClass({
	displayName: 'CheckoutButton',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'CheckoutButton' },
			React.createElement(
				'button',
				null,
				'Fazer Reserva'
			),
			React.createElement(
				'span',
				null,
				React.createElement('i', { className: 'fa fa-fw fa-lock' }),
				' Pagamento seguro'
			)
		);
	}
});

var ExpiryDate = React.createClass({
	displayName: 'ExpiryDate',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'ExpiryDate' },
			React.createElement(
				'div',
				null,
				React.createElement(
					'label',
					null,
					'Vencimento'
				),
				React.createElement(
					'div',
					{ className: 'Expiry' },
					React.createElement(
						'select',
						null,
						React.createElement(
							'option',
							{ value: '' },
							'Janeiro'
						),
						React.createElement(
							'option',
							{ value: '' },
							'Fevereiro'
						),
						React.createElement(
							'option',
							{ value: '' },
							'Março'
						),
						React.createElement(
							'option',
							{ value: '' },
							'Abril'
						),
						React.createElement(
							'option',
							{ value: '' },
							'Maio'
						),
						React.createElement(
							'option',
							{ value: '' },
							'Junho'
						),
						React.createElement(
							'option',
							{ value: '' },
							'Julho'
						),
						React.createElement(
							'option',
							{ value: '' },
							'Agosto'
						),
						React.createElement(
							'option',
							{ value: '' },
							'Setembro'
						),
						React.createElement(
							'option',
							{ value: '' },
							'Outubro'
						),
						React.createElement(
							'option',
							{ value: '' },
							'Novembro'
						),
						React.createElement(
							'option',
							{ value: '' },
							'Dezembro'
						)
					),
					React.createElement(
						'select',
						{ name: '', id: '' },
						React.createElement(
							'option',
							{ value: '' },
							'2022'
						),
						React.createElement(
							'option',
							{ value: '' },
							'2023'
						),
						React.createElement(
							'option',
							{ value: '' },
							'2024'
						),
						React.createElement(
							'option',
							{ value: '' },
							'2025'
						),
						React.createElement(
							'option',
							{ value: '' },
							'2026'
						),
						React.createElement(
							'option',
							{ value: '' },
							'2027'
						)
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'CVCField' },
				React.createElement(
					'label',
					null,
					'CVV'
				),
				React.createElement('input', { placeholder: '000', type: 'number' })
			)
		);
	}
});

var BasicInput = React.createClass({
	displayName: 'BasicInput',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'BasicInput' },
			React.createElement(
				'label',
				{ 'for': this.props.name },
				this.props.label
			),
			React.createElement('input', { id: this.props.name, type: this.props.type, placeholder: this.props.placeholder })
		);
	}
});

var Checkout = React.createClass({
	displayName: 'Checkout',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'Checkout' },
			React.createElement(OrderSummary, { discount: this.props.discount, tax: this.props.tax, price: this.props.price, duration: this.props.duration }),
			React.createElement(PaymentForm, { onSubmit: this.props.onSubmit })
		);
	}
});

var Header = React.createClass({
	displayName: 'Header',

	render: function render() {
		return React.createElement(
			'header',
			null,
			React.createElement('input', { onChange: this.props.onChange, type: 'range', max: '100', min: '1', step: '1' })
		);
	}
});

var App = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return {
			mounted: false,
			people: 1,
			price: 320.00,
			tax: 20,
			duration: 5,
			discount: 5
		};
	},

	componentDidMount: function componentDidMount() {
		this.setState({ mounted: true });
	},

	handleSubmit: function handleSubmit(e) {
		e.preventDefault();
	},

	handleChange: function handleChange(e) {
		console.log(e.target.value);
		this.setState({ duration: e.target.value });
	},

	render: function render() {

		var overlay, container;
		if (this.state.mounted) {
			overlay = React.createElement(Overlay, { image: 'pousada_dos_pinhos.jpg' });
			container = React.createElement(
				Container,
				null,
				React.createElement(ImagePreview, { price: this.state.price, duration: this.state.duration, people: this.state.people, image: 'pousada_dos_pinhos.jpg' }),
				React.createElement(Checkout, { discount: this.state.discount, tax: this.state.tax, price: this.state.price, duration: this.state.duration, onSubmit: this.handleSubmit })
			);
		}

		return React.createElement(
			'div',
			{ className: 'App' },
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'overlay', transitionEnterTimeout: 500, transitionLeaveTimeout: 300 },
				overlay
			),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'container', transitionEnterTimeout: 500, transitionLeaveTimeout: 300 },
				container
			),
			React.createElement(Header, { onChange: this.handleChange })
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
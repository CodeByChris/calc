let app = {
	name: 'Calculator',
	buffer: '',
	input: $('.c-calc__input'),
	inputContainer: $('.c-calc__inputs'),
	resultsPanel: $('.c-calc__results'),
	init() {
		this.updateBuffer();
	},
	addToBuffer(input) {
		this.buffer = `${ this.buffer }${ input }`;
		this.updateBuffer();
	},
	updateBuffer() {
		this.resultsPanel.children('span').html(this.buffer);
	},
	doBufferMath() {
		this.buffer = eval(this.buffer);
		this.updateBuffer();
	},
	clearBuffer() {
		this.buffer = '';
		this.updateBuffer();
	},
	clickHandler(input) {
		switch(input) {
			case 'C':
				this.clearBuffer();
				break;
			case '=':
				this.doBufferMath();
				break;
			default: 
				this.addToBuffer(input);
		}
	}
};

app.init();

// add listener to inputs should add this to the app object...
app.input.each(function() {
	let $this = $(this);

	$this.click(() => {
		// Handle the click
		app.clickHandler($(this).data('input'));
	});
});

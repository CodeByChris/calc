'use strict';

var app = {
	name: 'Calculator',
	buffer: '',
	input: $('.c-calc__input'),
	inputContainer: $('.c-calc__inputs'),
	resultsPanel: $('.c-calc__results'),
	init: function init() {
		this.updateBuffer();
	},
	addToBuffer: function addToBuffer(input) {
		this.buffer = '' + this.buffer + input;
		this.updateBuffer();
	},
	updateBuffer: function updateBuffer() {
		this.resultsPanel.children('span').html(this.buffer);
	},
	doBufferMath: function doBufferMath() {
		this.buffer = eval(this.buffer);
		this.updateBuffer();
	},
	clearBuffer: function clearBuffer() {
		this.buffer = '';
		this.updateBuffer();
	},
	clickHandler: function clickHandler(input) {
		switch (input) {
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
app.input.each(function () {
	var _this = this;

	var $this = $(this);

	$this.click(function () {
		// Handle the click
		app.clickHandler($(_this).data('input'));
	});
});
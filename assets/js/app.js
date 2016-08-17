'use strict';

var inputContainer = $('.c-calc__inputs');
var buffer = '';

var addToBuffer = function addToBuffer(input) {
    buffer = '' + buffer + input;
    updateBuffer();
};

var updateBuffer = function updateBuffer() {
    $('.c-calc__results').children('span').html(buffer);
};

var doBufferMath = function doBufferMath() {
    buffer = eval(buffer);
    updateBuffer();
};

var clearBuffer = function clearBuffer() {

    buffer = '';
    updateBuffer();
};

var init = function init() {
    updateBuffer();
};

init();

var clickHandler = function clickHandler(input) {

    switch (input) {
        case 'C':
            clearBuffer();
            break;

        case '=':
            doBufferMath();
            break;

        default:
            addToBuffer(input);
    }
};

// Listen for input click
$('.c-calc__input').each(function () {
    var _this = this;

    var $this = $(this);

    $this.click(function () {
        // Handle the click
        clickHandler($(_this).data('input'));
    });
});
const inputContainer = $('.c-calc__inputs');
let buffer = '';

let addToBuffer = input =>{
    buffer = `${ buffer }${ input }`;
    updateBuffer();
}

let updateBuffer = () => {
    $('.c-calc__results').children('span').html(buffer);
};

let doBufferMath = () => {
    buffer = eval(buffer);
    updateBuffer();
}

let clearBuffer = () => {

    buffer = '';
    updateBuffer();
};

let init = () => {
    updateBuffer();
}

init();

let clickHandler = input => {

    switch(input) {
        case 'C': 
            clearBuffer();
            break;

        case '=': 
            doBufferMath();
            break;

        default:
            addToBuffer(input);
    }
}

// Listen for input click
$('.c-calc__input').each(function() {
    let $this = $(this);

    $this.click(() => {
        // Handle the click
        clickHandler($(this).data('input'));
    });
});


let incCount = 31;
$('.count').text(+incCount);

const setZero = () => {
    incCount = 0;
    $('.count').text('0');
    console.log($('.count'), incCount);
}

$(document).ready(() => {

    $('.count').text(+incCount);

    $('#new-inc-btn').on('click', () => {
        setZero();
        const text = $("#new-inc-text").val();
        const d = new Date;
        const z = d.getMonth() < 9 ? '0' : ''
        const date = d.getDate() + '.' + z + (d.getMonth() + 1) + '.' + d.getFullYear();
        $('.inc-list').prepend(`<div class="inc"><p>${date}</p><p>${text}</p></div>`);
        $("#new-inc-text").val('');
    });

});

const increaseByOne = () => {
    incCount++;
    $('.count').text(+incCount);
    console.log(typeof incCount, typeof + incCount);
}

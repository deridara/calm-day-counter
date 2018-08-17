let incCount = 31;
$('.count').text(+incCount);

const setZero = () => {
    incCount = 0;
    $('.count').text('0');
    console.log($('.count'), incCount);
}

$(document).ready(() => {

    $('.count').text(+incCount);

    $('.count-text').text(countString(incCount));

    $('#new-inc-btn').on('click', () => {
        
        setZero();

        $('.count-text').text(countString(incCount));
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

const wordForNum = (str1, str2, str3) => (num) => {
    if (num > 4 && num < 21) return str3;
    if (num % 10 === 1) return str1;
    if (num % 10 > 1 && num % 10 < 5) return str2;
    return str3;
}

const countString = (num) => {
    const days = wordForNum('День', 'Дня', 'Дней')(num);
    return `${days} без происшествий`;
}

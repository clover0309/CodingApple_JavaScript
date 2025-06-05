let have = $('.tab-button').length;
for (let i = 0; i < have; i++){
    $('.tab-button').eq(i).on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
});
}


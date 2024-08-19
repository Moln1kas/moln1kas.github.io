function load_braindamage () {
    $('.page__default').css({'background':'var(--black-dark)', 'color':'var(--red-dark)'});

    $('.main__header__title').css('color', 'var(--red)');

    $('a').css('color', 'var(--red)');

    $('.main__navbar' ).css('background', 'var(--red-dark)');
    $('.main__navbar__content__link a').css('color', 'var(--black-dark)');

    $('.section').css('border', 'thick double var(--red-dark)');

    $('.info__card').css({'background':'var(--red-dark)', 'color':'var(--black-dark)'});
    $('.info__card__header').css('border', 'thick double var(--black-dark)');
    $('.info__card__title').css('color', 'var(--black-dark)');
    $('.info__card__desc').css('border', 'thick double var(--black-dark)');
    $('.info__card__list').css('color', 'var(--red)');

    $('.main__footer').css('background', 'var(--red-dark)');

    $('.modal').css({'background':'var(--red-dark)', 'color':'var(--black-dark)'});
    $('.modal__button__base').css('color', 'var(--red-dark)');
}

function load_true() {
    $(':root').get(0).style.setProperty("--black", "#32302f");
    $(':root').get(0).style.setProperty("--black-dark", "#1d2021");

    $(':root').get(0).style.setProperty("--red", "#cc241d");
    $(':root').get(0).style.setProperty("--red-dark", "#9d0006");

    $(':root').get(0).style.setProperty("--green", "#98971a");
    $(':root').get(0).style.setProperty("--green-dark", "#79740e");

    $(':root').get(0).style.setProperty("--yellow", "#fabd2f");
    $(':root').get(0).style.setProperty("--yellow-dark", "#b57614");

    $(':root').get(0).style.setProperty("--blue", "#458588");
    $(':root').get(0).style.setProperty("--blue-dark", "#076678");

    $(':root').get(0).style.setProperty("--purple", "#b16286");
    $(':root').get(0).style.setProperty("--purple-dark", "#8f3f71");

    $(':root').get(0).style.setProperty("--cyan", "#689d6a");
    $(':root').get(0).style.setProperty("--cyan-dark", "#427b58");

    $(':root').get(0).style.setProperty("--white", "#f9f5d7");
    $(':root').get(0).style.setProperty("--white-dark", "#d5c4a1");

    call_popup('Moln1kas', 'Поздравляю! Вы вошли в true mode. Теперь вы можете узнать всю правду.');

    $('.main__header__quote__author').html('Moln1kas');

    $('#nc__title').html('New Civilization');
    $('#nc__desc').html('Много попыток было начать разработку, но все они уходили в никуда. Проект ожидает своего зведного часа, возможно он наступит уже скоро. Этот текст оставлен 18 августа 2024 года.');
    $('#nc__button').html('Steam');

    $('#avatar__story').html('на сервере мобильного конструктора игр - CCode');
    $('#pixz__story').html('The PIXZ - survival хоррор про зомби аппокалипсис. Мой самый первый проект. Тогда я только пробовал геймдев, делал игру на всем чем мог, вот список: Solar2D, Unity, Godot. В конечном итоге из-за серьезных ошибок игра не была доделана и не будет.');
    $('#nc__story').html('Так вышло, что история New Civilization очень похожа на историю The PIXZ. Однако мы еще не похоронили этот проект, и возможно, что уже скоро мы займемся его разработкой.');
}
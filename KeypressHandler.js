Mousetrap.bind('c', function () {       //combat tracker
        $('#combat_button').click()
});


Mousetrap.bind('d', function () {       //draw menu
    if (window.DM){
        $('#draw_button').click()
    }
});


Mousetrap.bind('f', function () {       //fog menu
    if (window.DM){
        $('#fog_button').click()
    }
});


Mousetrap.bind('n', function () {   //while combat menu is open, press n to cycle next in initiative order
    if(window.DM && $('#combat_tracker_inside').attr('style') == 'display: block;') {
        $('#combat_next_button').click()
    }
});

Mousetrap.bind('r', function () {       //ruler
    $('#measure-button').click()
});


Mousetrap.bind('s', function () {       //video fullscreen toggle
    $('#select-button').click()
});


Mousetrap.bind('v', function () {       //video fullscreen toggle
    $('#jitsi_switch').click()
});

Mousetrap.bind('=', function () {       //zoom plus
    $('#zoom_plus').click()
});

Mousetrap.bind('-', function () {       //zoom minus
    $('#zoom_minus').click()
});

Mousetrap.bind('tab', function () {     //collapse/show character sheet
    if(!window.DM) {    
        $('#sheet_button').click()
    }
});


Mousetrap.bind('q', function () {       //collapse/show sidebar. (q is next to tab, also used to show/hide elements)
    $('#hide_rightpanel').click()
});

Mousetrap.bind('esc', function () {     //deselect all buttons
    stop_drawing();
    $(".drawbutton").removeClass('button-enabled button-selected');
    $(".top_menu").removeClass('visible');
    $("#select_button").addClass('button-enabled');
    $("#select_button").click();
});



//menu specific shortcuts, select the nth element of menu when it's open
Mousetrap.bind('1', function () {
    if ($("#fog_menu").hasClass('visible')) {
        $("#fog_menu .menu-option:eq(0)").click()
    }
    if ($("#draw_menu").hasClass('visible')) {
        $("#draw_menu .menu-option:eq(0)").click()
    }
});

Mousetrap.bind('2', function () {
    if ($("#fog_menu").hasClass('visible')) {
        $("#fog_menu .menu-option:eq(1)").click()
    }
    if ($("#draw_menu").hasClass('visible')) {
        $("#draw_menu .menu-option:eq(1)").click()
    }
});

Mousetrap.bind('3', function () {
    if ($("#fog_menu").hasClass('visible')) {
        $("#fog_menu .menu-option:eq(2)").click()
    }
    if ($("#draw_menu").hasClass('visible')) {
        $("#draw_menu .menu-option:eq(2)").click()
    }
});

Mousetrap.bind('4', function () {
    if ($("#fog_menu").hasClass('visible')) {
        $("#fog_menu .menu-option:eq(3)").click()
    }
    if ($("#draw_menu").hasClass('visible')) {
        $("#draw_menu .menu-option:eq(3)").click()
    }
});

Mousetrap.bind('5', function () {
    if ($("#fog_menu").hasClass('visible')) {
        $("#fog_menu .menu-option:eq(4)").click()
    }
    if ($("#draw_menu").hasClass('visible')) {
        $("#draw_menu .menu-option:eq(4)").click()
    }
});

Mousetrap.bind('6', function () {
    if ($("#fog_menu").hasClass('visible')) {
        $("#fog_menu .menu-option:eq(5)").click()
    }
    if ($("#draw_menu").hasClass('visible')) {
        $("#draw_menu .menu-option:eq(5)").click()
    }
});

Mousetrap.bind('up', function () {
    if ($("#fog_menu").hasClass('visible')) {
        $("#fog_menu .remembered-selection").parent().prevAll('div').children('.menu-option:first').click()
    }
    if ($("#draw_menu").hasClass('visible')) {
        $("#draw_menu .remembered-selection").parent().prevAll('div').children('.menu-option:first').click()
    }
    return false;
});

Mousetrap.bind('down', function () {
    if ($("#fog_menu").hasClass('visible')) {
        $("#fog_menu .remembered-selection").parent().nextAll('div').children('.menu-option:first').click()
    }
    if ($("#draw_menu").hasClass('visible')) {
        $("#draw_menu .remembered-selection").parent().nextAll('div').children('.menu-option:first').click()
    }
    return false;
});
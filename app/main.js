(function($, window) {
    var BASE_URL = 'http://localhost:8080';

    function _success(target) {
        $(`#${target}`).addClass('btn-success');
    }

    function _fail(target) {
        $(`#${target}`).addClass('btn-danger')
    }

    $('#btn-admin').on('click', function() {
        $.ajax({
            url: BASE_URL + '/',
            method: 'POST',
            data: {
                user: 'Admin',
            }
        }).then(function() {
            _success('btn-admin');
        }, function(){
            _fail('btn-admin')
        });
    });

    $('#btn-patient').on('click', function() {
        $.ajax({
            url: BASE_URL + '/',
            method: 'POST',
            data: {
                user: 'Patient',
            }
        }).then(function() {
            _success('btn-patient');
        }, function(){
            _fail('btn-patient')
        });
    });
})(jQuery, window);
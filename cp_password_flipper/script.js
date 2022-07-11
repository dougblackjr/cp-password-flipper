$(document).ready(function() {
    console.log('Ok ready')
    $('input[type=password]').each(function() {
        var passwordInput = $(this);
        var passwordInputContainer = passwordInput.closest('fieldset'),
            eyeOpen = '/themes/user/cp_password_flipper/eye-open.svg',
            eyeClosed = '/themes/user/cp_password_flipper/eye-closed.svg',
            eyeImg = '<img src="' + eyeOpen + '" class="eye js-show-password" style="cursor: pointer;position: absolute;right: 25px;top: 4px;" />',
            eyeIsOpen = false

        $(passwordInputContainer).css({'position': 'relative'})
        if (passwordInput.closest('.field-control').length) {
            passwordInput.closest('.field-control').css('position', 'relative');
        }
        $(eyeImg).insertAfter(passwordInput)

        $(passwordInputContainer).find('.js-show-password').on('click', function () {
            passwordInput.attr('type', (passwordInput.attr('type') === 'password' ? 'text' : 'password'));
            $(this).attr('src', eyeIsOpen ? eyeOpen : eyeClosed)
            eyeIsOpen = !eyeIsOpen
        });
    })
});
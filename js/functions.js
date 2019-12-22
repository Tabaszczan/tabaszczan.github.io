$(document).ready(function () {
    $('.carousel').carousel('pause');
    $('.alert').click(function () {

        $.alert({
            title: 'A witam!',
            content: 'url:../text.txt',
            contentLoaded: function (data, status, xhr) {
                this.setContentAppend('<br>Status: ' + status);
            },
            autoClose: 'ok|8000',
            draggable: true,
            backgroundDismiss: false,
            backgroundDismissAnimation: 'shake',
            theme: 'my-theme',
            closeIcon: true,
            closeIconClass: 'fas fa-times',
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'right' // Align mobile sidenav to the right
    });

    var elems2 = document.querySelectorAll('.sidenav-trigger');
    var instances2 = M.Sidenav.init(elems2);
});
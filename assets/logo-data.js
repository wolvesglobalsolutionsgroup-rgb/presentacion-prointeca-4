// Prointeca Logo - Base64 embedded for zero-dependency rendering
// Auto-injected by build process - DO NOT EDIT MANUALLY
window.PROINTECA_LOGO_B64 = 'LOGO_PLACEHOLDER';

// Auto-inject logo into all .prointeca-logo-img elements on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    var logoEls = document.querySelectorAll('.prointeca-logo-img');
    logoEls.forEach(function(img) {
        if (window.PROINTECA_LOGO_B64 && window.PROINTECA_LOGO_B64 !== 'LOGO_PLACEHOLDER') {
            img.src = 'data:image/jpeg;base64,' + window.PROINTECA_LOGO_B64;
            img.style.display = 'block';
        }
    });
});
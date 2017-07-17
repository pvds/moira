/**
 * Moira variables
 */
moira.initVars = function () {
    /**
     * Global variables
     */

    // get document <html>
    this.vars.html = document.documentElement;

    // switch js detection class
    this.vars.html.classList.remove('no-js');
    this.vars.html.classList.add('js');

    // get document <body>
    this.vars.body = document.getElementsByTagName('body');

    // get animation elements
    this.vars.animateEl = document.querySelectorAll('.is-animate');

    // get window Width
    this.vars.windowW = window.innerWidth;

    // get window height
    this.vars.windowH = window.innerHeight;

    // get window scroll top
    this.vars.windowScrollTop = window.pageYOffset;

    // detect device type
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.vars.mobile = true;
        this.vars.html.classList.add('mobile');
    } else {
        this.vars.mobile = false;
        this.vars.html.classList.add('desktop');
    }
};

/**
 *
 * Moira initialisation
 *
 */

document.addEventListener('DOMContentLoaded', () => {
    /**
     * Global variables
     **/
    moira.initVars();

    /**
     * Theme listeners
     **/

    /**
     * Theme functions
     **/

    /**
     * Helper listeners
     **/
    moira.form.fields.note.addEventListener('keyup', () => autogrow(moira.form.fields.note, 20));

    /**
     * Helper functions
     **/
    window.viewportUnitsBuggyfill.init();
    mqClasses(moira.vars.windowW);
    autogrow(moira.form.fields.note);
});

window.addEventListener('resize', () => {
    // update window width
    moira.vars.windowW = window.innerWidth;

    if (document.getElementById('patched-viewport')) {
        viewportUnitsBuggyfill.refresh();
    }
    mqClasses(moira.vars.windowW);
    autogrow(moira.form.fields.note);
});

window.addEventListener('scroll', () => {});
window.addEventListener('load', () => {});

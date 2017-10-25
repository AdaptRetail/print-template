let mix = require( 'laravel-mix' );

/*
 * Extend Laravel Mix
 */
require( '@adapt-retail/adapt-mix-extender' ).extend( mix );

/**
 * Add $id before everything when running
 * npm run prod
 */
var buildAdaptMixin = function() {
    if (mix.inProduction()) {
        return `
            @mixin adapt-print {
                #{'$id'} {
                    @content;
                }
            }
        `;
    }

    return `
        @mixin adapt-print {
            @content;
        }
    `;

}

/*
 * Build script and compile sass
 * Display banner and hot reload
 */
mix.js('src/Scripts/main.js', 'dist/snippet.js')
   .sass('src/Style/main.scss', 'dist/snippet.css', {
       data: buildAdaptMixin(),
   })
   .browserSync();

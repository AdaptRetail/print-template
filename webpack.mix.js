let mix = require( 'laravel-mix' );

/*
 * Extend Laravel Mix
 */
require( '@adapt-retail/adapt-mix-extender' ).extend( mix );

var buildAdaptMixin = function() {
    // Add $id before everyting
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

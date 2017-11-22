let mix = require( 'laravel-mix' );

/*
 * Extend Laravel Mix
 */
require( '@adapt-retail/adapt-mix-extender' ).extend( mix );

/**
 * Helper for doing different things when
 * running "npm run watch" and "npm run prod"
 *
 * adapt-print
 * Add $id before everything when running
 * npm run prod
 *
 * adapt-production
 * Only show content in production
 *
 * adapt-development
 * Only show content in development
 *
 */
var buildAdaptMixin = function() {
    if (mix.inProduction()) {
        return `
            @mixin adapt-print {
                #{'$id'} {
                    @content;
                }
            }
            @mixin adapt-production {
                @content;
            }
            @mixin adapt-development {
                #not-used {
                    @content;
                }
            }
        `;
    }

    return `
        @mixin adapt-print {
            @content;
        }
        @mixin adapt-production {
            #not-used {
                @content;
            }
        }
        @mixin adapt-development {
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

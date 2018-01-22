# Print template
> A great starting point for building print templates for [Adapt Retail](https://adaptretail.com).

![Adapt outline production](/assets/screenshot.png)

## Table of content

- [Install](#install)
- [Usage](#usage)
    - [Local development](#npm-run-watch)
    - [Prepare files for production](#npm-run-prod)
    - [Files](#files)
- [Extracted style](#extracted-style)
- [Projects dependencies](#projects-dependencies)
- [Publishing to Adapt Retail](#publishing-to-adapt-retail)
- [License](#license)

<a name="install"></a>
## Install

```bash
# Clone repository
git clone https://github.com/AdaptRetail/print-template

# Go to directory
cd print-template

# Install dependencies
npm install 
```

<a name="usage"></a>
## Usage

> All dependencies must be [installed](#install) before you can start using the template.

This template is using `npm`, `Sass` and `Webpack` to build your files and containing [some extra helpers](#dependencies) to make things easier for you.

<a name="npm-run-watch"></a>
### Build in local environment

> When getting product data from Adapt Make sure you reference to a Adapt Data Collection.

```bash
# Open file in default browser (browser-sync) and
# auto refresh browser on file save
npm run watch
```
> You can also display your production on other devices on your local network.
> Check your terminal for information after running `npm run watch`.

<a name="npm-run-prod"></a>
### Prepare files for production

```bash
# Compile files to dist/ folder
npm run prod
```

The `npm run prod` command is compiling and minifying the css and javascript.
All your files will be compiled to the `dist/` folder.

<a name="prepare-adapt-data"></a>
### Prepare Adapt Retail data for development

To prepare data from [Adapt Retail](https://adaptretail.com) for development you need to create a new `Collection` production.

The `collection` needs one product and a snippet with all attributes to include from Adapt.

Publish the `collection` and get the product, campaign and production ids from the `url` and add them to the `getAdaptData` function.

> If you only want to use the preview data, remember to set `preview: true`, in the `getAdaptData` function.


<a name="files"></a>
### Files

All your production files will be found in the `src/` folder.

We have provided the files with some content, but
this is your files and we don't tell you what you do. 
This is our approach when we are creating productions, 
and you may add, move and remove files however you want.

> All files are thoroughly commented, so if you're in doubt, just read the source. 

#### [`src/Script/main.js`](https://github.com/AdaptRetail/print-template/blob/master/src/Scripts/main.js)

This file 

```js
// Get the AdaptPrintData class from NODE
import AdaptPrintData from '@adapt-retail/print-data';

/**
 * Create the Template class
 * We will handle the logic if local or in production
 */
export default class Template extends AdaptPrintData {

    /**
     * The template that should be rendered to DOM
     * We uses mustache syntax to render the variables to template
     *
     * @return String
     */
    template() {
        return `
            <div class="product">
                <img src="{{ image }}">
                <h1>{{ name }}</h1>
            </div>
        `;
    }

    /**
     * Setup what API data we use if we are on local development
     *
     * @return Object
     */
    getAdaptData() {
        return {
            account: 'priceco58c12436f20b4',
            project: 1,
            campaign: 1,
            production: 1,
        }
    }

    /**
     * Format the data we get from Adapt
     *
     * @return Object
     */
    format( item ) {
        return {
            name: item.name,
            image: this.asset( item.image ),
        }
    }

    /**
     * Script that runs after template is rendered to DOM
     *
     * this.template represents the element containing the template
     *
     * @return void
     */
    script() {
        console.log(this.data);
    }

}

/**
 * After the class has been created we must initialize it to execute our code
 */
new Template;
```

<a name="style"></a>
#### [`src/Style/main.scss`](https://github.com/AdaptRetail/print-template/blob/master/src/Style/main.scss)

This is the main Sass file.
This file is including all the other sass files.
Do whatever you want from here.

We have set up some logic to get you started. Browse through the files and see what each file does.
If you want to overwrite some variables you can do it in [`src/Style/Utilities/Variables.scss`](https://github.com/AdaptRetail/print-template/blob/master/src/Style/Utilities/Variables.scss).

> Most of the files are containing variables you can over write in this file.
> Just add the variable here, and it will be overwritten.
> Try `$google-font-name: "Lobster";`

<a name="dependencies"></a>
## Dependencies

This project is using different dependencies to make it easier to make display banners.

<a name="banner-style"></a>
### [Banner style](https://github.com/AdaptRetail/banner-style)

Micro frontend framework containing helpers like `grid` system using flex.

<a name="sass-asset-inline"></a>
### [sass-asset-inline](https://github.com/LasseHaslev/sass-asset-inliner)

Inline assets like `image` and `fonts` in your sass files with simple syntax.

```scss
@font-face {
    src: inline-font( 'path/to/your/font.ttf' ); // Include full font

    // Subset font by adding regex as second parameter
    // of each character you want to include
    src: inline-font( 'path/to/your/font.ttf', '[0-9]' );
}

body {
    // Inline image
    background-image: inline-image( 'path/to/your/image.png' );

    // Inline and resize image to width (Kepp aspect ratio)
    background-image: inline-image( 'path/to/your/image.png', "200" );

    // Resize image and ignoring aspect ratio
    background-image: inline-image( 'path/to/your/image.png', "200x400" );

    // Resize image to height and keep aspect ratio
    background-image: inline-image( 'path/to/your/image.png', "_x400" );

    // Underscore works also for height.
    // ("200x_" equals "200" as shown above)
}
```

> All files are included from your root folder.

### [Adapt Data](https://github.com/AdaptRetail/banner-data)

Communicate with Adapt Retail productions through our API.

### [laravel-mix](https://github.com/JeffreyWay/laravel-mix)

We are extending [laravel-mix](https://github.com/JeffreyWay/laravel-mix) with [Laravel mix extender](https://github.com/AdaptRetail/adapt-mix-extender) to include helpers like the [sass-asset-inline](#sass-asset-inline)

<a name="extracted-style"></a>
## Extracted style

Some of the style of this template has been extracted [to another git repository](https://github.com/AdaptRetail/priceco-style).
This is to reuse the elements and components in other productions.

This is a recommendation if you are creating multiple templates for [Adapt Retail](https://adaptretail.com).

<a name="publish"></a>
## Publishing to [Adapt Retail](https://adaptretail.com)

1. [Log in to your Adapt retail account](https://app.adaptretail.com/signup_login.php?task=login)
1. Click on template section in your left navigation bar
1. Create a new `Outline` template
1. Set your properties in `Details` tab
1. Select `Files` tab
1. Prepare files to [Adapt Retail](https://adaptretail.com) by running `npm run prod` in your terminal.
1. Drag `dist/ad.js` and `dist/ad.css` to the `dropzone (Drop files or click to upload)` in Adapt
1. **And you are done!**

<a name="license"></a>
## License

This template heavely dependent on [GSAP animation framework](https://greensock.com/gsap), and they are subject to [their own license](http://greensock.com/standard-license).
Read their license to make sure you are on the safe side on how you use this template.

The code provided in this template is available for usage by all clients of [Adapt Retail](https://adaptretail.com).

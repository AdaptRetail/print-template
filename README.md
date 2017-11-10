# Print template
> A great starting point for building print templates for [Adapt Retail](https://adaptretail.com).

![Adapt outline production](/assets/screenshot.png)

## Table of content

- [Install](#install)
- [Usage](#usage)
    - [npm run watch](#npm-run-watch)
    - [npm run prod](#npm-run-prod)
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

<a name="npm-run-watch"></a>
### `npm run watch`
You can see the snippet when working on it simply by writing `npm run watch`.
This will start [Browser Sync](https://www.browsersync.io/) and will display your content, and refresh your browsers every time you save a file.

This represents a snippet element after it has been implemented to a production.

<a name="npm-run-prod"></a>
### `npm run prod`
The `npm run prod` command is minifying css and javascript and removes source maps.
It will also add `$id` before every class or id in css. Adapt Retail replaces that into each snippet element.

<a name="extracted-style"></a>
## Extracted style

Some of the style of this template has been extracted [to another git repository](https://github.com/AdaptRetail/priceco-style).
This is to reuse the elements and components in other productions.

This is a recommendation if you are creating multiple templates for [Adapt Retail](https://adaptretail.com).

<a name="projects-dependencies"></a>
## Projects dependencies
- [@adapt-retail/banner-style](https://github.com/AdaptRetail/banner-style)
    - [@lassehaslev/sass-asset-inline](https://github.com/LasseHaslev/sass-asset-inliner)
- [@adapt-retail/print-data](https://github.com/AdaptRetail/print-data)
- [laravel-mix](https://github.com/JeffreyWay/laravel-mix)
    - [@adapt-retail/adapt-mix-extender](https://github.com/AdaptRetail/adapt-mix-extender)

<a name="publishing-to-adapt-retail"></a>
## Publishing to [Adapt Retail](https://adaptretail.com)

1. Prepare files to [Adapt Retail](https://adaptretail.com) by running `npm run prod` in your terminal.
1. [Log in to your Adapt retail account](https://app.adaptretail.com/signup_login.php?task=login)
1. Click on template section in your left navigation bar
1. Create a new `Banner template`
1. Set your properties in `Details` tab
1. Select `Files` tab
1. Drag `dist/snippet.js` and `dist/snippet.css` to the `dropzone (Drop files or click to upload)` in Adapt
1. **And you are done!**

<a name="license"></a>
## License

This project is MIT licensed.

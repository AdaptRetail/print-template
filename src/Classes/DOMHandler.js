export default class DOMHandler {
    static insertHtml(element, html) {
        element.insertAdjacentHTML( 'beforeEnd', html );
    };

    static insertInBannerContainer( html ) {
        var bannerContainer = document.getElementById( 'adaptBanner' );
        this.insertHtml( bannerContainer, html );
    }

    static insertInHead( html ) {
        this.insertHtml(document.querySelector( 'head' ), html)
    }
}

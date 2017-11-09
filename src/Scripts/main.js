// Get the AdaptPrintData class from NODE
import AdaptPrintData from '@adapt-retail/print-data';

/**
 * Create the Template class
 * We will handle the logic if local or in production
 */
export default class Template extends AdaptPrintData {

    /**
     * The template that should be rendered to DOM
     * We uses mustache syntax to render the template
     *
     * @return String
     */
    template() {
        return `
            <div class="product">

                <div class="grid is-vertical">
                    <div class="column is-filled">
                        <div>
                            <div class="product-image" style="background-image:url( {{ image }} );"></div>

                            {{#pricematch}}
                                <div class="bomb is-pricematch"></div>
                            {{/pricematch}}
                            {{#threefortwo}}
                                <div class="bomb is-threefortwo"></div>
                            {{/threefortwo}}

                            <div class="price">
                                <div class="price__number price__integer">{{ price.integer }}</div><div class="price__number price__decimal">{{ price.decimal }}</div>
                            </div>

                        </div>
                    </div>
                    <div class="column is-narrow">
                        <div class="vendor-logo image" style="background-image: url( {{ vendorlogo }} );"></div>
                        <div class="name">{{ name }}</div>
                        <div class="description">{{ description }}</div>
                        <div class="price__save">Spar {{ pricebefore }}</div>
                    </div>
                </div>

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
        item.image = this.asset( item.image );
        item.vendorlogo = this.asset( item.vendorlogo );
        item.pricematch = item.pricematch === "1";
        item.threefortwo = item.threefortwo === "1";
        item.description = item.descriptionshort;

        /**
         * Split the price now to become array with integer and decimal
         * If no decimal is found, we set as 00
         */
        var tmpPrice = item.pricenow.split( /[,\.]/ );
        item.price = {
            integer: tmpPrice[0],
            decimal: tmpPrice.length >= 2 ? tmpPrice[1] : '00',
        }

        return item;
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

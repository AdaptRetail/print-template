// Get the AdaptPrintData class from NODE
import AdaptPrintData from '@adapt-retail/print-data';

/**
 * Create the Template class
 * We will handle the logic if local or in production
 */
export default class Template extends AdaptPrintData {

    /**
     * The template that should be rendered to DOM
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
                            <div class="price">{{ pricenow }}</div>
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
     * Setup what API data we shall use if we dont find data on DOM
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
     * Format the data we find from Adapt
     *
     * @return Object
     */
    format( item ) {
        item.image = this.asset( item.image );
        item.vendorlogo = this.asset( item.vendorlogo );
        item.pricematch = item.pricematch === "1";
        item.threefortwo = item.threefortwo === "1";
        item.description = item.descriptionshort;

        return item;
    }

    /**
     * Script that should be run after adding each template to DOM
     *
     * this.template represents the container
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

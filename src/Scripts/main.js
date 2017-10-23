import AdaptPrintData from '@adapt-retail/print-data';

export default class Template extends AdaptPrintData {

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

    getAdaptData() {
        return {
            account: 'priceco58c12436f20b4',
            project: 1,
            campaign: 1,
            production: 1,
        }
    }

    format( item ) {
        console.log(item);

        item.image = this.adaptData.asset( item.image );
        item.vendorlogo = this.adaptData.asset( item.vendorlogo );
        item.pricematch = item.pricematch === "1";
        item.threefortwo = item.threefortwo === "1";
        item.description = item.descriptionshort;

        return item;
    }

    script() {
        console.log(this.data);
    }

}

new Template;

// Prepare adapt data
// var adaptData = new AdaptData( {
    // account: 'priceco58c12436f20b4',
    // project: 1,
    // campaign: 1,
    // production: 1,
// } );

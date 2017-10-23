import AdaptPrintData from '@adapt-retail/print-data';

export default class Template extends AdaptPrintData {

    template() {
        return `
            <h1>Hello world!</h1>
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
        return {
            image: this.adaptData.asset( item.image ),
        }
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

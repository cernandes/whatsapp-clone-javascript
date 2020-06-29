class WhatsAppController {

    constructor() {

        this.loadElements();
    }

    loadElements() {

        this.EL = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.EL[Format.getCamelCase(element.id)] = element;

        });
    }
}
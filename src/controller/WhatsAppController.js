class WhatsAppController {

    constructor() {

        this.elementsPrototype();

        this.loadElements();

    }

    /* loadElements() cria uma 'div' e gera o data-set com todos os elementos 'id' no formato camel case */
    loadElements() {

        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.getCamelCase(element.id)] = element;

        });
    }//fim loadElements()

    /* elementsPrototype() cria e simplifica o uso de funções que vão se repetir ao longo do código*/
    elementsPrototype() {

        Element.prototype.hide = function () {

            this.style.display = "none";

            return this;
        }

        Element.prototype.show = function () {

            this.style.display = "block";

            return this;
        }

        Element.prototype.toggle = function () {

            this.style.display = (this.style.display === 'none') ? 'block' : 'none';

            return this;
        }

        Element.prototype.on = function (events, func) {

            events.split(' ').forEach(event => {

                this.addEventListener(event, func);
            });

            return this;
        }

        Element.prototype.css = function (styles) {

            for (let name in styles) {

                this.style[name] = styles[name];

            }

            return this;
        }

        Element.prototype.addClass = function (name) {

            this.classList.add(name);

            return this;
        }

        Element.prototype.removeClass = function (name) {

            this.classList.remove(name);

            return this;
        }

        Element.prototype.toggleClass = function (name) {

            this.classList.toggle(name);

            return this;
        }

        Element.prototype.hasClass = function (name) {

            return this.classList.contains(name);
        }
        
    }//fim elementsPrototype()
}
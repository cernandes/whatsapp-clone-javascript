/**classe estática para gerar o data-set dos elementos e transforma-los para o padrão camel case */
class Format {

    static getCamelCase(text) {

        let div = document.createElement('div');

        div.innerHTML = `<div data-${text}="id"></div>`;

        return Object.keys(div.firstChild.dataset)[0];
    }

}
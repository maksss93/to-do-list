export default class AddTemplate {
    constructor(options) {
        this.options = {
            templateClass: 'template',
            templateType: 'list',
            ...options
        }

        this.init()
    }

    

    init() {
        console.log(this.options);
    }
}
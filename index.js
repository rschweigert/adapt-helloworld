const { AbstractModule } = require('adapt-authoring-core');

export default class HelloWorld extends AbstractModule {
    async init() {
        console.log('Hallo Welt!')
    }
}
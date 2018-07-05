# Example UiComponent mixin
Example Magento 2 module creating a RequireJS mixin for the UiComponent class

## Installation
To install use the following composer command:

    composer require yireo-training/magento2-example-uicomponent-mixin:dev-master

Next enable the module:

    bin/magento module:enable Yireo_ExampleUiComponentMixin
    bin/magento setup:upgrade
    
And flush the cache:

    bin/magento cache:clean

# Proof of concept
After installing the module, the console log should be flooded with logs containing template names.

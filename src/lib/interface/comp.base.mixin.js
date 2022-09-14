// Basic component definition "Mixin"
export default {
    props: {
        ui: {
            // UI component interface
            type: Object,
            default: () => {
                return null
            }
        },
        meta: {
            // Meta information for controlling UI components
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    render: function(h) {
        let uiComponent = this.ui;
        if(uiComponent == null) {
            return h('div', 'No UI components are defined or cannot be called directly!')
        }
        else {
            return h(uiComponent, {
                props: {
                    scope: this,  //Expose data and methods (instances) of base components to UI components
                    meta: this.meta // Get control meta information through meta attribute
                }
            })
        }
    }
}
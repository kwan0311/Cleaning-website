// Basic component definition "Mixin"
export default {
    props: {
        scope: {
            type: Object,
            default: () => {
                return {}
            }
        },
        meta: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
}
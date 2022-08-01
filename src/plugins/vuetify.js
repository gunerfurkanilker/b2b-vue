import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#0288D1',
                secondary: '#6c757d',
                accent: '#3ea2fb',
                error: '#dc3545',
                petrol: '#17a499',
                background: 'transparent',
                danger: '#ff0000'
            }
        },
        options: {
            customProperties: true
        },
    },
}

export default new Vuetify(opts)
import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import CircleProgressBar from './CircleProgressBar.vue';

createApp(App).mount('#app');

export default {
    install: (app, options) => {
        app.component('CircleProgressBar', CircleProgressBar);
    }
}

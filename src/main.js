import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import VueMeta from "vue-meta";
createApp(App)
	.use(store)
	.use(router)
	// .use(VueMeta, {
	// 	// optionnel pluginOptions
	// 	refreshOnceOnNavigation: true,
	// })
	.mount("#app");

import App from './App.svelte';

const app = (targetId, props) => new App({
	target: document.getElementById(targetId),
	props: props
});

// 'svelte-app' has to be a unique name for your app.
// make sure it is the same as in window['svelte-app'] in index.html
// a good convention is to use the name of your app-directory
window['svelte-app'] = app;
export default app;

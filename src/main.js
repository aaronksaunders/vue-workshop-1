// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Router from "vue-router";
import HelloWorld from "./components/HelloWorld";
import TodoList from "./components/TodoList";

// tell Vue that you want to use the vue-router module
Vue.use(Router);

/* 
define each component that you want to load
when a user visits a certain route
*/
let router = new Router({
  routes: [
    { path: "/hello", name: "HelloWorld", component: HelloWorld },
    { path: "/todo", name: "TodoList", component: TodoList }
  ]
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import { firestorePlugin } from "vuefire";
import { auth } from "./firebase-database";

import Router from "vue-router";
import HelloWorld from "./components/HelloWorld";
import TodoList from "./components/TodoList";
import TodoDetail from "./components/TodoDetail";
import App from "./App";

// tell Vue that you want to use the vue-router module
Vue.use(Router);


const serialize = doc => {
  // documentSnapshot.data() DOES NOT contain the `id` of the document. By
  // default, Vuefire adds it as a non enumerable property named id.
  // This allows to easily create copies when updating documents, as using
  // the spread operator won't copy it
  return { ...doc.data(), id: doc.id };
};

Vue.use(firestorePlugin, { serialize });

/* 
define each component that you want to load
when a user visits a certain route
*/
let router = new Router({
  routes: [
    { path: "/hello", name: "HelloWorld", component: HelloWorld },
    { path: "/todo", name: "TodoList", component: TodoList },
    { 
      path: "/todo-detail", 
      name: "TodoDetail", 
      component: TodoDetail, 
      props : true 
    }
  ]
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router
}).$mount("#app");

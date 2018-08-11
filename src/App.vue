<template>
  <div id="app">
    <div>
      <img width="10%" src="./assets/logo.png"/>
    </div>

    <!-- 
    ADD THE ROUTER LINK TO LOAD THE HELLOWORLD COMPONENT 
    https://router.vuejs.org/guide/essentials/navigation.html
    -->
    <router-link class="btn" to="/hello"> go to hello world</router-link>
    <!-- ADD THE ROUTER LINK TO LOAD THE TO-DO LIST COMPONENT -->
    <a class="btn" @click="$router.push('/todo')">Todo List</a>

    <!-- ROUTER-BASED COMPONENTS WILL BE LOADED INTO THE BODY OF THIS ELEMENT -->
    <div id="router-section">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

// import the HelloWorld and TodoList component
import HelloWorld from "./components/HelloWorld";
import TodoList from "./components/TodoList";

// this data will be exported for any controller that uses this component
export default {
  name: "App", // this is the name of the App element that we'll assign to this component
  components: {
    HelloWorld,
    TodoList
  }
};
</script>

<style scoped>

/* define the styles for the element that has an ID of app */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#router-section {
  padding : 20px;
}

/* define the styles for the all h3 elements */
h3 {
  color : #f00 !important;
}
</style>

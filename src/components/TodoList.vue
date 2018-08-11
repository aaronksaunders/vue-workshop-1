<template>
    <!-- ASSIGN A NAME TO THIS COMPONENT -->
    <div class="todo">

    <!-- DISPLAY THE TITLE -->
    <h3>{{title}}</h3>

    <!-- the name of the to-do item can be inputted here -->
    <input placeholder="Enter Title" type="text" v-model="text_title" />
    <input placeholder="Enter Description" type="text" v-model="text_description" />

    <!-- this button is used to add an item to the to-do list -->
    <a class="btn" v-on:click="addItem"  :disabled=!dataValid>Add Item</a>

    <!-- the to-do list is rendered here -->
    <ul class="collection">
      <li class="collection-item" v-for="todo in todos" v-bind:key="todo['.key']">
        <h4>{{todo.title}}</h4>
        <h6>{{todo.description}}</h6>
        <a class="btn-small red" v-on:click="deleteItem(item.id)">Delete Item</a>
      </li>
    </ul>
  </div>
</template>

<script>

import db  from './firebase-setup';

export default {

  // set the name of the component
  name: "TodoList",

  // checks for length of input to enable the button
  computed : {
    dataValid :function () {
      return (this.text_title.length !== 0 && this.text_description.length  !== 0)
    }
  },
  // define the variables for this component
  data() {
    return {
      title : "To-do List",
      text_title : "",
      text_description : "",
      items : [],
      todos : []
    };
  },
  // firebase/firestore section
  firestore() {
    return { 
      todos : db.collection('todos') 
    }
  },
  // define a list of methods which can be used by this component
  methods : {

    /** add a to-do item to the array */
    addItem : function() {
      this.items.push({
        id : "id" + Date.now() + "_"+Math.random(), // create a unique ID for the 
        text_title : this.text_title,
        text_description : this.text_description
      })
      this.text_title = "";
      this.text_description = "";
    },

    /** 
    * remove the selected item from the 
    * @param {string} _id the id for the selected to-do item
    */
    deleteItem : function(_id){
      this.items = this.items.filter((_item)=>{
        return _item.id !== _id;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#router-section li {
  display : block;
  text-align: left
}
</style>

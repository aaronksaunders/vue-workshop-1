<template>
    <div>
        <pre>  {{ item }} </pre>
        <div class="switch">
        <label>
            Not Completed
            <input type="checkbox" v-model="switch_completed">
            <span class="lever"></span>
            Completed
        </label>
        </div>
        <router-link to="/todo">
        <a class="btn-small">go back</a>
        </router-link>
         <a class="btn-small" v-on:click="updateItem(item)">Save Changes</a>
    </div>
</template>

<script>
import db from "./firebase-setup";

export default {
  name: "TodoDetail",
  props: ["item"],
  computed: {},
  data() {
    return {
      switch_completed: this.item.completed ? true : false
    };
  },
  // firebase/firestore section
  firestore() {
    return {
      currentItem: db.collection("todos").doc(this.item[".key"])
    };
  },
  methods: {
    /**
     * remove the selected item from the
     * @param {string} _id the id for the selected to-do item
     */
    updateItem: function(_todo) {
      let dataToSave = _todo;
      delete dataToSave[".key"];
      this.$firestore.currentItem
        .update({
          ...dataToSave,
          completed: this.switch_completed
        })
        .then(
          r => {
            console.log("completed");
            this.$router.go(-1)
          },
          e => console.log(e)
        );
    }
  },

  mounted() {}
};
</script>

<style scoped>
.switch {
  padding: 10px;
}
</style>
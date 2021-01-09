<template>
  <div id="app">
    <section class="hero is-fullheight is-info">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <ExerciseForm @submit="onSubmit"></ExerciseForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ExerciseForm from "./components/ExerciseForm.vue";

import axios from "axios";
export default {
  name: "App",
  components: {
    ExerciseForm,
  },
  methods: {
    onSubmit(formValue) {
      console.log(formValue);
      console.log({
        studentNo: this.studentNo,
        exerciseNo: this.exerciseNo,
        languageName: this.languageName,
        code: this.code,
      });
      axios.post(`http://127.0.0.1:5000/${this.languageName}`, {
        userid: this.studentNo,
        exerciseNo: this.exerciseNo,
        language: this.languageName,
        code: this.code,
      });
    },
  },
};
</script>

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
      axios.post(`http://localhost:5000/${formValue.languageValue}`, {
        userid: formValue.studentNo,
        exerciseNo: formValue.exerciseNo,
        language: formValue.languageValue,
        code: formValue.code,
      });
    },
  },
};
</script>

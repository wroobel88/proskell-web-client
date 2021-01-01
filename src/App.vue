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

export default {
  name: "App",
  components: {
    ExerciseForm,
  },
  methods: {
    onSubmit(formValue) {
      console.log(formValue);
    },
  },
};
</script>

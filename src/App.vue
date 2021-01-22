<template>
  <div id="app">
    <section class="hero is-fullheight" :class="[`is-${backgroundColor}`]">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <ExerciseForm
                v-if="step === 'form'"
                @submit="onSubmit"
              ></ExerciseForm>
              <LoadingSpinner
                v-else-if="step === 'loading'"
                :text="loadingText"
                :is-shown="results === null"
              ></LoadingSpinner>
              <TestResults
                v-else-if="step === 'results'"
                :results="results"
                :error-text="errorText"
                @back="onBack"
              ></TestResults>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ExerciseForm from "./components/ExerciseForm.vue";
import LoadingSpinner from "./components/LoadingSpinner";
import TestResults from "./components/TestResults.vue";

export default {
  name: "App",
  components: {
    ExerciseForm,
    LoadingSpinner,
    TestResults,
  },
  data: function () {
    return {
      step: "form",
      results: null,
      loadingText: "Wysyłanie",
      errorText: "",
      backgroundColor: "info",
    };
  },
  methods: {
    onSubmit(formValue) {
      if (formValue) {
        const { exerciseNo } = formValue;

        this.step = "loading";

        if (
          exerciseNo === "__demo_success__" ||
          exerciseNo === "__demo_compilation_error__" ||
          exerciseNo === "__demo_runtime_error__" ||
          exerciseNo === "__demo_timeout_error__" ||
          exerciseNo === "__demo_unknown_error__"
        ) {
          setTimeout(() => {
            this.loadingText = "Kompilacja";
          }, 2000);
          setTimeout(() => {
            this.loadingText = "Testowanie";
          }, 4000);
          setTimeout(() => {
            let results =
              exerciseNo === "__demo_compilation_error__" ||
              exerciseNo === "__demo_unknown_error__"
                ? null
                : new Array(10).fill(null).map((_, i) => ({
                    name: `Test numer ${i + 1}`,
                    result: "unknown",
                    comment: "nie został uruchomiony",
                  }));

            if (exerciseNo === "__demo_success__") {
              results = results.map((r) => ({
                ...r,
                result: "pass",
                comment: "",
              }));
            } else if (exerciseNo === "__demo_compilation_error__") {
              this.errorText = "Błąd kompilacji";
            } else if (exerciseNo === "__demo_runtime_error__") {
              results[0].result = "fail";
              results[0].comment = "błąd wykonania";
            } else if (exerciseNo === "__demo_timeout_error__") {
              results = results.map((r, i) =>
                i < 4
                  ? { ...r, result: "pass", comment: "" }
                  : i === 4
                  ? { ...r, result: "fail", comment: "przekroczony czas" }
                  : r
              );
            }

            this.step = "results";
            this.results = results;
            this.backgroundColor =
              exerciseNo === "__demo_success__"
                ? "success"
                : exerciseNo === "__demo_compilation_error__" ||
                  exerciseNo === "__demo_unknown_error__"
                ? "danger"
                : "info";
          }, 10000);
        } else {
          // TODO: make a call to the API with axios and transform response / handle error
          console.log(formValue);
        }
      }
    },
    onBack() {
      this.step = "form";
      this.results = null;
      this.loadingText = "Wysyłanie";
      this.errorText = "";
      this.backgroundColor = "info";
    },
  },
};
</script>

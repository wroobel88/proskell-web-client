<template>
  <div id="app">
    <section class="hero is-fullheight is-info">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <form class="box" @submit.prevent="onSubmit">
                <div class="field">
                  <label
                    for="studentNo"
                    class="label"
                    :class="{
                      'has-text-danger':
                        isStudentNoTouched && !isStudentNoValid,
                    }"
                    >Numer indeksu</label
                  >
                  <div class="control">
                    <input
                      id="studentNo"
                      v-model="studentNo"
                      class="input"
                      :class="{
                        'is-danger': isStudentNoTouched && !isStudentNoValid,
                      }"
                      type="text"
                      placeholder="Numer indeksu"
                      @blur="isStudentNoTouched = true"
                    />
                  </div>
                </div>

                <div class="field">
                  <label
                    for="exerciseNo"
                    class="label"
                    :class="{
                      'has-text-danger':
                        isExerciseNoTouched && !isExerciseNoValid,
                    }"
                    >Numer zadania</label
                  >
                  <div class="control">
                    <input
                      id="exerciseNo"
                      v-model="exerciseNo"
                      class="input"
                      :class="{
                        'is-danger': isExerciseNoTouched && !isExerciseNoValid,
                      }"
                      type="text"
                      placeholder="Numer zadania"
                      @blur="isExerciseNoTouched = true"
                    />
                  </div>
                </div>

                <div class="field">
                  <label
                    for="languageName"
                    class="label"
                    :class="{
                      'has-text-danger':
                        isLanguageNameTouched && !isLanguageNameValid,
                    }"
                    >Język</label
                  >
                  <div class="control">
                    <div
                      class="select is-fullwidth"
                      :class="{
                        'is-danger':
                          isLanguageNameTouched && !isLanguageNameValid,
                      }"
                    >
                      <select
                        id="languageName"
                        v-model="languageName"
                        @blur="isLanguageNameTouched = true"
                      >
                        <option
                          v-for="(language, index) in languageNames"
                          :key="index"
                          :value="language.value"
                        >
                          {{ language.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label
                    for="code"
                    class="label"
                    :class="{
                      'has-text-danger': isCodeTouched && !isCodeValid,
                    }"
                    >Kod</label
                  >
                  <div class="control">
                    <textarea
                      id="code"
                      v-model="code"
                      class="textarea"
                      :class="{ 'is-danger': isCodeTouched && !isCodeValid }"
                      placeholder="Kod"
                      @blur="isCodeTouched = true"
                    ></textarea>
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <button
                      class="button is-success"
                      type="submit"
                      :disabled="!isFormValid"
                    >
                      Wyślij
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      languageNames: [
        { name: "Haskell", value: "haskell" },
        { name: "Prolog", value: "prolog" },
      ],
      studentNo: "",
      isStudentNoTouched: false,
      exerciseNo: "",
      isExerciseNoTouched: false,
      languageName: "haskell",
      isLanguageNameTouched: false,
      code: "",
      isCodeTouched: false,
    };
  },
  computed: {
    isStudentNoValid() {
      const v = Math.floor(Number(this.studentNo));
      return v !== Infinity && String(v) === this.studentNo && v >= 0;
    },
    isExerciseNoValid() {
      return this.exerciseNo !== "";
    },
    isLanguageNameValid() {
      return this.languageNames.map((l) => l.value).includes(this.languageName);
    },
    isCodeValid() {
      return this.code !== "";
    },
    isFormValid() {
      return (
        this.isStudentNoValid &&
        this.isExerciseNoValid &&
        this.isLanguageNameValid &&
        this.isCodeValid
      );
    },
  },
  methods: {
    onSubmit() {
      console.log({
        studentNo: this.studentNo,
        exerciseNo: this.exerciseNo,
        languageName: this.languageName,
        code: this.code,
      });
    },
  },
};
</script>

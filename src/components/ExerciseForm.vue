<template>
  <form class="box" @submit.prevent="onSubmit">
    <InputField
      v-model="studentNo"
      html-id="studentNo"
      label="Numer indeksu"
      :is-valid="isStudentNoValid"
    ></InputField>

    <InputField
      v-model="exerciseNo"
      html-id="exerciseNo"
      label="Numer zadania"
      :is-valid="isExerciseNoValid"
    ></InputField>

    <SelectField
      v-model="languageValue"
      html-id="languageValue"
      label="Język"
      :options="languages"
    ></SelectField>

    <TextareaField
      v-model="code"
      html-id="code"
      label="Kod"
      :is-valid="isCodeValid"
    ></TextareaField>

    <FieldCustom>
      <template v-slot:control>
        <ButtonCustom type="submit" is-success :disabled="!isFormValid">
          Wyślij
        </ButtonCustom>
      </template>
    </FieldCustom>
  </form>
</template>

<script>
import InputField from "./InputField.vue";
import SelectField from "./SelectField.vue";
import TextareaField from "./TextareaField.vue";
import FieldCustom from "./FieldCustom.vue";
import ButtonCustom from "./ButtonCustom.vue";

const languages = [
  { name: "Haskell", value: "haskell" },
  { name: "Prolog", value: "prolog" },
];

export default {
  name: "FormExercise",
  components: {
    InputField,
    SelectField,
    TextareaField,
    FieldCustom,
    ButtonCustom,
  },
  data() {
    return {
      studentNo: "",
      exerciseNo: "",
      languages,
      languageValue: languages[0].value,
      code: "",
    };
  },
  computed: {
    isStudentNoValid() {
      const v = Math.floor(Number(this.studentNo));
      return v !== Infinity && String(v) === this.studentNo && v >= 0;
    },
    isExerciseNoValid() {
      return this.exerciseNo.trim() !== "";
    },
    isCodeValid() {
      return this.code !== "";
    },
    isFormValid() {
      return (
        this.isStudentNoValid && this.isExerciseNoValid && this.isCodeValid
      );
    },
  },
  methods: {
    onSubmit() {
      this.$emit("submit", {
        studentNo: this.studentNo,
        exerciseNo: this.exerciseNo,
        languageValue: this.languageValue,
        code: this.code,
      });
    },
  },
};
</script>

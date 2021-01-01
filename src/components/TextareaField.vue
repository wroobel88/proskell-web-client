<template>
  <FieldCustom>
    <template v-slot:label>
      <LabelCustom
        :html-for="htmlId"
        :label="label"
        :is-danger="isDanger"
      ></LabelCustom>
    </template>
    <template v-slot:control>
      <TextareaCustom
        v-model="localValue"
        :html-id="htmlId"
        :label="label"
        :is-danger="isDanger"
        @touch="isTouched = true"
      ></TextareaCustom>
    </template>
  </FieldCustom>
</template>

<script>
import FieldCustom from "./FieldCustom.vue";
import LabelCustom from "./LabelCustom.vue";
import TextareaCustom from "./TextareaCustom.vue";

export default {
  name: "TextareaField",
  components: {
    FieldCustom,
    LabelCustom,
    TextareaCustom,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    htmlId: {
      type: String,
      required: true,
      validator: (value) => value !== "",
    },
    label: {
      type: String,
      required: true,
      validator: (value) => value.trim() !== "",
    },
    isValid: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isTouched: false,
    };
  },
  computed: {
    isDanger() {
      return this.isTouched && !this.isValid;
    },
    localValue: {
      get() {
        return this.value;
      },
      set(localValue) {
        this.$emit("input", localValue);
      },
    },
  },
};
</script>

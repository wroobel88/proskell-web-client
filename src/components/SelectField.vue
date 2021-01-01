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
      <SelectCustom
        v-model="localValue"
        :html-id="htmlId"
        :options="options"
        :is-danger="isDanger"
        @touch="isTouched = true"
      ></SelectCustom>
    </template>
  </FieldCustom>
</template>

<script>
import FieldCustom from "./FieldCustom.vue";
import LabelCustom from "./LabelCustom.vue";
import SelectCustom from "./SelectCustom.vue";

export default {
  name: "SelectField",
  components: {
    FieldCustom,
    LabelCustom,
    SelectCustom,
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
    options: {
      type: Array,
      required: true,
      validator: (value) => !!value.length,
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

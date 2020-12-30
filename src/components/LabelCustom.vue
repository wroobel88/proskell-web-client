<template>
  <label class="label" :class="{ 'has-text-danger': isDanger }" :for="htmlFor">
    {{ label }}
  </label>
</template>

<script>
export default {
  name: "LabelCustom",
  props: {
    htmlFor: {
      type: String,
      required: true,
      validator: (value) => value !== "",
    },
    label: {
      type: String,
      required: true,
      validator: (value) => value.trim() !== "",
    },
    isDanger: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

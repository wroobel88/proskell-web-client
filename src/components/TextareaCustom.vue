<template>
  <textarea
    :id="htmlId"
    class="textarea"
    :class="{ 'is-danger': isDanger, 'is-family-monospace': hasTextMonospace }"
    :placeholder="label"
    :value="value"
    @input="$emit('input', $event.target.value)"
    @blur="$emit('touch')"
  ></textarea>
</template>

<script>
export default {
  name: "TextareaCustom",
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
    hasTextMonospace: {
      type: Boolean,
      default: false,
    },
    isDanger: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

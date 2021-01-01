<template>
  <input
    :id="htmlId"
    type="text"
    class="input"
    :class="{ 'is-danger': isDanger }"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
    @blur="$emit('touch')"
  />
</template>

<script>
export default {
  name: "InputCustom",
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
    placeholder: {
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

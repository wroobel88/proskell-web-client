<template>
  <button
    class="button"
    :class="{ 'is-success': isSuccess }"
    :type="type"
    :disabled="isDisabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonCustom",
  props: {
    type: {
      type: String,
      default: "button",
      validator: (value) => ["button", "submit", "reset"].includes(value),
    },
    isSuccess: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

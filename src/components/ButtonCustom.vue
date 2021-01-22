<template>
  <button
    class="button"
    :class="[`is-${variant}`]"
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
    variant: {
      type: String,
      default: "info",
      validator: (value) =>
        ["info", "success", "warning", "danger"].includes(value),
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div class="select is-fullwidth" :class="{ 'is-danger': isDanger }">
    <select
      :id="htmlId"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('touch')"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectCustom",
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
    options: {
      type: Array,
      required: true,
      validator: (value) => !!value.length,
    },
    isDanger: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

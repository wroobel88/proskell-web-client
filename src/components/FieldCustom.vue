<template>
  <div class="field">
    <slot name="label"></slot>
    <div class="control">
      <slot name="control"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FieldCustom",
};
</script>

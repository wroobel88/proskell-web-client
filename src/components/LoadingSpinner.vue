<template>
  <div v-if="isShown" class="is-centered">
    <div class="has-text-centered is-size-5">
      <p v-if="text">{{ text }}</p>
      <p class="mb-2">Proszę czekać</p>
      <div class="loading-spinner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
  props: {
    text: {
      type: String,
      default: "",
    },
    isShown: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.is-centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loading-spinner {
  display: inline-block;
  width: 80px;
  height: 80px;
}

.loading-spinner:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: loading-spinner 1.2s linear infinite;
}

@keyframes loading-spinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>

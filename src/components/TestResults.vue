<template>
  <div>
    <div class="box outer-container">
      <div class="centering-container">
        <h1
          v-if="results !== null"
          class="custom-heading mb-3 is-size-3 has-text-centered"
        >
          Raport z testowania
        </h1>
        <div class="w-100 px-6">
          <div
            v-if="results !== null"
            class="table-container custom-table-container"
          >
            <table
              class="table custom-table is-hoverable is-fullwidth is-striped is-bordered has-text-centered"
            >
              <thead>
                <tr>
                  <th>Nazwa testu</th>
                  <th>Wynik testu</th>
                  <th>Komentarz</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(result, index) in results"
                  :key="index"
                  :class="{ 'has-text-light': result.result === 'unknown' }"
                >
                  <td
                    :class="{
                      'has-text-dark': result.result === 'fail',
                      'has-text-grey-light': result.result === 'unknown',
                    }"
                  >
                    {{ result.name }}
                  </td>
                  <td
                    :class="{
                      'has-text-success': result.result === 'pass',
                      'has-text-danger': result.result === 'fail',
                      'has-text-grey-light': result.result === 'unknown',
                    }"
                  >
                    {{
                      result.result === "pass"
                        ? "zaliczony"
                        : result.result === "fail"
                        ? "niezaliczony"
                        : "nieznany"
                    }}
                  </td>
                  <td
                    :class="{
                      'has-text-danger': result.result === 'fail',
                      'has-text-grey-light': result.result === 'unknown',
                    }"
                  >
                    {{ result.comment }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else class="is-size-4 has-text-centered">
            <span v-if="errorText">{{ errorText }}</span>
            <span v-else
              >Wystąpił nieznany błąd.<br />Spróbuj ponownie później.</span
            >
          </div>
        </div>
        <ButtonCustom
          class="custom-button-position"
          variant="info"
          @click.native="onBack"
          >Cofnij</ButtonCustom
        >
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCustom from "./ButtonCustom";

export default {
  name: "TestResults",
  components: {
    ButtonCustom,
  },
  props: {
    results: {
      required: true,
      validator: (value) => value === null || Array.isArray(value),
    },
    errorText: {
      type: String,
      default: "",
    },
  },
  methods: {
    onBack() {
      this.$emit("back");
    },
  },
};
</script>

<style scoped>
.w-100 {
  width: 100%;
}

.outer-container {
  min-height: 504px;
}

.custom-heading {
  top: 20px;
  position: absolute;
  left: 0;
  right: 0;
}

.custom-table-container {
  max-height: 300px;
  overflow-y: auto;
}

.custom-table {
  min-width: 600px;
}

.custom-button-position {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.centering-container {
  top: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

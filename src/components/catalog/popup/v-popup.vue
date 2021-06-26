<template>
  <div class="popup-wrapper" ref="popup-wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>{{ popupTitle }}</span>
        <span>
          <i class="material-icons" @click="closePopup"> close </i>
        </span>
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
      <div class="v-popup__footer">
        <button class="close-modal btn" @click="closePopup">Close</button>
        <!-- здесь событие прокидывается наверх в родительский компонент -->
        <button class="submit-btn btn" @click="rightBtnAction">
          {{ rightBtnTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  props: {
    popupTitle: {
      type: String,
      default: "Popup name",
    },
    rightBtnTitle: {
      type: String,
      default: "Ok",
    },
  },
  data() {
    return {};
  },
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
    rightBtnAction() {
      this.$emit("rightBtnAction");
    },
  },
  mounted() {
    document.addEventListener("click", (event) => {
      if (event.target === this.$refs["popup-wrapper"]) {
        this.closePopup();
      }
    });
  },
};
</script>

<style lang="scss">
.popup-wrapper {
  background: rgba(64, 64, 64, 0.4); // затенение фона при открытии попапа
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.v-popup {
  padding: 16px;
  position: fixed;
  top: 50px;
  width: 400px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .submit-btn {
    padding: 8px;
    color: #ffffff;
    background: #26ae68;
  }
  .close-modal {
    padding: 8px;
    color: #ffffff;
    background: red;
  }
  .material-icons {
    cursor: pointer;
  }
}
</style>


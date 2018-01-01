<template>
  <div class="v-toolbar"
       :class="{inactive: toggled}"
       :style="[positionStyle, bgColor]">
      <slot></slot>
  </div>
</template>

<script>
const px = v => v + 'px'

const percen = v => v + '%'

export default {
  name: 'Toolbar',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top'
    },
    height: {
      type: Number,
      default: 64
    },
    width: {
      type: Number,
      default: 64
    },
    color: {
      type: String,
      default: '#4285f4'
    }
  },
  data () {
    return {
      toggled: !this.value,
      colorStyle: {
        background: this.color
      }
    }
  },
  computed: {
    positionStyle () {
      switch (this.position) {
        case 'top':
          return {
            top: px(0),
            left: px(0),
            right: px(0),
            height: px(this.height)
          };
        case 'left':
          return {
            top: px(0),
            left: px(0),
            height: percen(100),
            width: px(this.width)
          };
        case 'right':
          return {
            top: px(0),
            right: px(0),
            height: percen(100),
            width: px(this.width)
          };
        case 'bottom':
          return {
            bottom: px(0),
            left: px(0),
            right: px(0),
            height: px(this.height)
          };
        default:
          return {
            top: px(0),
            height: px(64)
          }
      }
    },
    bgColor() {
      return {
        backgroundColor: this.color
      }
    }
  },
  watch: {
    value (value) {
      this.toggled = !value
    }
  },
}
</script>

<style lang="scss" scoped>

.v-toolbar {
  align-items: center;
  background: white;
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2);
  display: flex;
  justify-content: space-between;
  position: fixed;
  transition: opacity .1s 0s cubic-bezier(0.4,0.0,1,1);
  visibility: visible;
  z-index: 200;
}

.inactive {
  display: none;
}

</style>

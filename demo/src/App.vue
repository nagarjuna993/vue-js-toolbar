<template>
  <div id="app">
    <h1></h1>
    <h2>Toolbar for all needs!</h2>
    <div class="demo-content">
      <toolbar :value="toggled" :position="position" :height="64" :width="64" :color="color">
        <div class="toolbar-content">
          <p :style="[sideStyle]">Vue Js Toolbar</p>
        </div>
      </toolbar>

      Toggle to see: <toggle-button @change="toggled = $event.value" :value="true"/>
      <pre>State: {{toggled}}</pre>

      Change position: <select v-model="position">
        <option value='top'>Top</option>
        <option value='left'>Left</option>
        <option value='right'>Right</option>
        <option value='bottom'>Bottom</option>
      </select>
      <pre>Position: {{ position }}</pre>

      Change color: <input v-model="color" placeholder="#hex values only!">
      <pre>Color: {{ color }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      toggled: true,
      position: 'top',
      color: '#4285f4'
    }
  },
  computed: {
    sideStyle() {
      switch (this.position) {
        case 'left':
          return {
            transform: 'rotate(-180deg)',
            textOrientation: 'sideways',
            writingMode: 'vertical-rl',
            lineHeight: '0px'
          }
        case 'right':
          return {
            textOrientation: 'sideways',
            writingMode: 'vertical-lr',
            lineHeight: '0px',
          }
        default:
          return {}
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Helvetica', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #304458;
  margin-top: 60px;
}

h2 {
  font-weight: normal;
}

.toolbar-content {
    padding: 0 14px;

    p {
      color: #FFFFFF;
      font-size: 18px;
    }
}

select {
  background: #ebf2f9;
  outline: none;
  border: none;
  border-radius: 22px;
  padding: 4px;
  color: #304458;
}

input {
  background: #ebf2f9;
  border: none;
  padding: 4px 8px;
  border-radius: 22px;
  width: 65px;
  outline: none;
  color: #304458;
}
</style>

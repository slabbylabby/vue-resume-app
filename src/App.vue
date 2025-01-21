<template>
  <div id="app">
    <header>
      <h1>Vue SPA App</h1>
      <p>Responsive Design Example2</p>
    </header>

    <main>
      <section class="content">
        <h2>Welcome to Our Single Page Application</h2>
        <p>This application is mobile-friendly and built with Vue.js.</p>

        <button @click="toggleMode">
          Switch to4 {{ darkMode ? 'Light' : 'Dark' }} Mode
        </button>
      </section>
    </main>

    <darkModeBtn
      buttonType="danger"
      buttonColor="#f44336"
      textColor="#fff"
      @click="handleDangerClick"
    >
      Danger Button
    </darkModeBtn>

    <footer>
      /*<p>Made with Vue.js</p>*/
    </footer>
  </div>
</template>

<script>
import darkModeBtn from './components/DarkMode.vue';

export default {
  darkModeBtn,
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleMode() {
      this.darkMode = !this.darkMode;
    },
  },
};
</script>



<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #fff;
  color: #333;
  transition: background-color 0.3s, color 0.3s;
}

#app {
  text-align: center;
}

header {
  background-color: #282c34;
  color: white;
  padding: 20px;
}

h1 {
  font-size: 2.5em;
}

h2 {
  font-size: 1.8em;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  font-size: 1.2em;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

footer {
  background-color: #282c34;
  color: white;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
}

/* Responsive Design */
@media (max-width: 768px) {
  header {
    padding: 15px;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  button {
    padding: 12px 18px;
    font-size: 1em;
  }
}

/* Dark Mode Styles */
.dark-mode {
  background-color: #121212;
  color: white;
}
</style>
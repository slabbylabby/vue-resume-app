<!-- test component does not work yet-->
<template>
    <button
      :class="['btn btn-primary', buttonType]"
      :style="{ backgroundColor: buttonColor, color: textColor }"
      @click="handleClick"
    >
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'DarkMode',
    components: {

    },
    data: () => ({

    }),
    computed: {
      
    },
    props: {
      // Define the type of the button (e.g., 'primary', 'secondary', 'danger')
      buttonType: {
        type: String,
        default: 'primary',
      },
      // Define the color of the button (can be customized)
      buttonColor: {
        type: String,
        default: '#4CAF50', // default green
      },
      // Define the text color
      textColor: {
        type: String,
        default: '#fff', // default white text
      },
    },
    methods: {
      // Emit a custom event when the button is clicked
      handleClick() {
        this.$emit('click');
      },
    },
  };
  </script>
  
  <style scoped>
  .base-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  .base-button:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }
  
  /* Specific styles for button types */
  .base-button.primary {
    background-color: #4CAF50;
  }
  
  .base-button.secondary {
    background-color: #2196F3;
  }
  
  .base-button.danger {
    background-color: #f44336;
  }
  
  .base-button:focus {
    outline: none;
  }
  </style>
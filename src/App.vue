<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/todolist">Todos</RouterLink>
    </nav>
  </header>
  
  <RouterView />
  <footer>
    <p>&copy; 2024 j todolist.</p>
  </footer>
</template>

<style scoped>
:root {
  --color-primary: #007BFF;
  --color-secondary: #6C757D;
  --color-text: #343A40;
  --color-border: #DEE2E6;
  --color-background: #F8F9FA;
  --color-header: #D3D3D3; /* Updated color for header */
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

header {
  background-color: gray;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

footer {
  background-color: gray;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.1rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

nav a {
  color: var(--color-secondary);
  font-size: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.3s, background-color 0.3s;
  border-radius: 5px;
}

nav a.router-link-exact-active {
  color: var(--color-primary);
  font-weight: bold;
}

nav a:hover {
  color: var(--color-primary);
  background-color: rgba(0, 123, 255, 0.1);
}

nav a.router-link-exact-active:hover {
  background-color: rgba(0, 123, 255, 0.2);
}

@media (min-width: 1024px) {
  nav a {
    font-size: 1.25rem;
  }
}
</style>

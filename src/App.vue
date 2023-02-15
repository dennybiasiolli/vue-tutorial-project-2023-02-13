<template>
  <ul>
    <li>
      <RouterLink to="/bindings">Bindings</RouterLink>
    </li>
    <li>
      <RouterLink to="/counter">Counter</RouterLink>
    </li>
    <li>
      <RouterLink to="/tests">Tests</RouterLink>
    </li>
    <li>
      <RouterLink to="/tests2">Tests 2</RouterLink>
    </li>
    <li>
      <RouterLink to="/tests3">Tests 3</RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'todo' }">To-do Utility</RouterLink>
    </li>
  </ul>
  <RouterView />
</template>

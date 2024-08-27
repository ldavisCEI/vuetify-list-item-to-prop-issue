<template>
  <v-container>
    <div v-for="n in 1000" :key="n">
      <RouterLink to="/helloworld">Item {{ n }}</RouterLink>
    </div>
  </v-container>
</template>

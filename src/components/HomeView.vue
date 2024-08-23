<template>
  <v-list>
    <v-list-item v-for="n in 1000" :key="n" :title="'Item ' + n" to="/helloworld" />
  </v-list>
</template>

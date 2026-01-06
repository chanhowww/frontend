<script setup>
import { ref, onMounted } from "vue";
import { getHello } from "../api/commonApi";

const msg = ref("");

onMounted(async () => {
  const res = await getHello();
  msg.value = res.data.msg;
});
</script>

<template>
  <h1>HelloWorld</h1>
  <h2>{{ msg }}</h2>
  <h1>test commit</h1>
</template>

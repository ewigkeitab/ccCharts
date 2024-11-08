<template>
  <div class="outline large_width">
    <div class="mainText">{{ props.mainText }}</div>
    <div class="secText">{{ props.secondText }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
const props = defineProps<{
  mainText: string;
  secondText: string;
}>();
</script>
<script lang="ts">
// export default {
//   'name': "BadgeChart",
// };
</script>
<style scoped>
.outline {
  background-color: #fffbda;
    border-style: solid;
    border-width: 15px;
    border-radius: 25px;
    border-color: rgb(87, 190, 127);
    margin: 5px;
    padding: 0px;
    max-height: -webkit-fill-available;

}
.large_width {
  width: 96px;
  height: 96px;
}
.mainText {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    margin-bottom: 10%;
    font-size: xx-large;
    text-align: center;
    height: 60%;
    align-content: center;
}
.secText {
    color: black;
    text-align: end;
    padding: 0px;
    margin: 5px;
}
</style>

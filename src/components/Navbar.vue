<template>

<div class="flex bg-white w-full max-w-7xl content-center items-center py-2 px-4 ">
    <Logo />
    <div class="grow">
     <!-- change to v-for later -->
        <ul class="flex justify-end text-base font-medium text-zinc-600">
            <li class="p-2 mx-1 hover:text-zinc-800">
                About Me
            </li>
            <li class="p-2 mx-1 hover:text-zinc-800">
                Education
            </li>
            <li class="p-2 mx-1 hover:text-zinc-800">
                Experience
            </li>
            <li class="p-2 mx-1 hover:text-zinc-800">
                Teaching/Service
            </li>
            <li class="p-2 mx-1 hover:text-zinc-800">
                Publications
            </li>
            <li class="p-2 mx-1 hover:text-zinc-800">
                Awards
            </li>
            <li class="p-2 mx-1 hover:text-zinc-800">
                Projects
            </li>
        </ul>
    </div>
</div>
      
</template>
  
<script setup lang="ts">
    import Logo from './helpers/Logo.vue';

//   import info from "../assets/info";
  

</script>

<style scoped>

</style>

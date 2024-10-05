<script setup lang="ts">
// import info from '../assets/info';

</script>

<template>
    <!-- photo -->
    <div class="flex justify-center">
        <img src="/src/assets/photo.png" class="w-52 h-52 rounded-xl">
    </div>
    <!-- List of icons -->
    <div class="flex flex-col content-center ">

        <div class="flex justify-center mt-4 text-2xl font-semibold text-zinc-900" >
            KaShun SHUM
        </div>
    </div>
    <!-- icon (not for click)-->
    <div class="mt-4 flex flex-col content-center space-y-2 text-zinc-800 ">
        <div class="flex pl-[44px]">
            <span class="w-6 h-6 text-center">
                <span class="fa-solid fa-location-pin text-zinc-500 fa-lg"></span>
            </span>
            <span class="text-center">
                <span class="ml-4 text-zinc-700 text-sm font-medium">Hong Kong, China</span>
            </span>
        </div>
        <div class="flex pl-[44px] border-b-[1px] pb-2">
            <!-- <div class="border-b-[1px] pb-2 border-zinc-300">                     -->
                <span class="w-6 h-6 text-center">
                    <span class="fa-solid fa-envelope text-zinc-500 fa-lg"></span>
                </span>
                <span class="text-center">
                    <span class="ml-4 text-zinc-700 text-sm font-medium">ksshumab@connect.ust.hk</span>
                </span>
            <!-- </div> -->
        </div>
    </div>

    <!-- icon (for click)-->
    <div class="mt-4 flex flex-col content-center space-y-2 text-zinc-800 ">
        <!-- google scholar -->
        <a href="https://scholar.google.com/citations?user=JQakEawAAAAJ&hl=en" target="_blank" class="flex pl-[44px] group">
            <span class="w-6 h-6 text-center">
                <span class="fa-brands fa-google-scholar text-zinc-500 fa-lg group-hover:text-blue-500/80"></span>
            </span>
            <span class="text-center">
                <span class="ml-4 text-zinc-700 text-sm font-medium group-hover:text-blue-400/75">Google Scholar</span>
            </span>
        </a>
        <!-- Github -->
        <a href="https://github.com/SHUMKASHUN" target="_blank" class="flex pl-[44px] group">
            <span class="w-6 h-6 text-center">
                <span class="fa-brands fa-github text-zinc-500 fa-lg group-hover:text-blue-500/80"></span>
            </span>
            <span class="text-center">
                <span class="ml-4 text-zinc-700 text-sm font-medium group-hover:text-blue-400/75">Github</span>
            </span>
        </a>
        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/kashunshum/" target="_blank" class="flex pl-[44px] group border-b-[1px] pb-2">
            <span class="w-6 h-6 text-center">
                <span class="fa-brands fa-linkedin text-zinc-500 fa-lg group-hover:text-blue-500/80"></span>
            </span>
            <span class="text-center">
                <span class="ml-4 text-zinc-700 text-sm font-medium group-hover:text-blue-400/75">LinkedIn</span>
            </span>
        </a>
    </div>

</template>

<style scoped>

</style>

<script setup lang="ts">
// import { ref } from 'vue'
// import award from './award.vue'

import Introduction from './Introduction.vue'   
import Education from './Education.vue'
import Experience from './Experience.vue'
import Teaching from './Teaching.vue'
import Service from './Service.vue'
import FullArticle from './FullArticle.vue'
//left
import Icon from './Icon.vue'
import News from './News.vue'
// defineProps<{ msg: string }>()

// const count = ref(0)

</script>

<template>

    <div class="flex w-full max-w-7xl bg-white mx-8 flex-col md:flex-row" >
        <!-- left part -->
        <div class="w-96 flex flex-col content-center mt-8 ">
            <Icon />
            <News />
        </div>
        <!-- right part -->
        <div class="flex flex-col w-full ">
            <div class="text-2xl font-medium mt-6 border-b-[1pt] mr-4 text-zinc-900">
                About Me
            </div>
            <Introduction />
            <div class="text-2xl font-medium mt-6 border-b-[1pt] mr-4 text-zinc-900">
                Education
            </div>
            <Education />
            <div class="text-2xl font-medium mt-6 border-b-[1pt] mr-4 text-zinc-900">
                Experience
            </div>
            <Experience />
            <div class="text-2xl font-medium mt-6 border-b-[1pt] mr-4 text-zinc-900">
                Teaching 
            </div>
            <Teaching />
            <div class="text-2xl font-medium mt-6 border-b-[1pt] mr-4 text-zinc-900">
                Academic Service 
            </div>
            <Service />
            <div class="text-2xl font-medium mt-6 border-b-[1pt] mr-4 text-zinc-900">
                Publications
            </div>   
            <FullArticle />
            <div class="text-2xl font-medium mt-6 border-b-[1pt] mr-4 text-zinc-900">
                Awards
            </div>  
            <award />
        </div>
    </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

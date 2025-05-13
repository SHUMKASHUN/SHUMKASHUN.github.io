<script setup lang="ts">
// import { ref } from 'vue'
import info from '../assets/info'
var hightlight_keywords = ['KaShun SHUM', 'Pre-training','Post-training', 'code agent' ]
var keywords2Link = {
    "Prof. Junxian HE": "https://jxhe.github.io/" ,
    "The Hong Kong University of Science and Technology": "https://hkust.edu.hk/",
    "Qwen Team": "https://github.com/QwenLM",
    "Binyuan HUI": "https://huybery.github.io/"
}
function hightLightHandle(text: string) :string {
    if(text){
        // For hightlight Name
        for (let i = 0; i < hightlight_keywords.length; i++) {
            var reg = new RegExp(hightlight_keywords[i], 'gi');
            if (hightlight_keywords[i] == 'KaShun SHUM'){
                text = text.replace(reg, `<span class="font-semibold px-2 bg-blue-300/50 rounded ">${hightlight_keywords[i]}</span>`);}
            else{
                text = text.replace(reg, `<span class="font-semibold">${hightlight_keywords[i]}</span>`);
            }
        }
        for (const [key, value] of Object.entries(keywords2Link)) {
            var reg = new RegExp(key, 'gi');
            text = text.replace(reg, `<a href="${value}" class="text-blue-400/75 hover:text-blue-600/75">${key}</a>`);
        }
        return text;
    }
    else return text
}
</script>

<template>
    <div class="mt-2 text-base text-zinc-700 px-6 space-y-3  tracking-normal leading-7">
        <!-- 第一段介绍 -->
        <p v-html="hightLightHandle(info.description)" ></p>
        <!-- 第二段介绍 -->
        <p v-html="hightLightHandle(info.research_interest)"></p>
        <!-- 广告 -->
        <!-- <div class="bg-zinc-100 rounded-lg w-full pl-4 pr-2 py-6">
            <span class="fa-light fa-rectangle-ad px-2 text-blue-600/75 fa-xl"></span>
            I am looking for a summer Internship about Large Lanaguge Model in 2025 in the US. If there is any potential opportunity to collaborate, please feel free to contact me. Thanks!
        </div> -->
    </div>
</template>

<style scoped>

</style>

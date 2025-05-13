<template>
  <div class="flex flex-col md:flex-row items-center rounded-lg p-4 ">
    <!-- 左侧图片部分 -->
    <div class="flex flex-col items-center mr-6 w-[300px] flex-shrink-0 max-h-[300px] overflow-hidden">  <!-- 增加到更大的宽度和高度 -->
        <div class="bg-orange-300/50 px-2 py-1 mb-2 rounded-md  ">
            {{ article.conference_year }}
        </div>
        <img 
            :src="article.imageSrc" 
            alt="Article Image" 
            class="rounded-lg"
        />
    </div>


    <!-- 右侧文字部分 -->
    <div class="flex flex-col">
        <!-- Title -->
        <div class="text-lg font-semibold text-zinc-800">
            {{ article.title }}
        </div>
        <div class="flex space-x-2 text-xs">
            <span v-for="tag in article.tags" :key="tag" class="bg-blue-300/50 px-2 py-1 rounded-md">
                {{ tag }}
            </span>
        </div>
        <div class="text-sm text-zinc-500 pt-2" v-html="hightLightAuthor(article.authors)">
        </div>
        <div class="text-sm text-zinc-600 pt-2">{{ article.description }}</div>
        <!-- Paper Link github等等 -->
        <div class="flex space-x-2 mt-2">
            <a target="_blank" :href="article.arxiv" class="bg-orange-300/50 rounded-md px-2 py-[2px]  hover:bg-orange-300/75">
                <span class="w-6 h-6 text-center">
                    <span class="fa-regular fa-arrow-up-right text-zinc-600 fa-lg">
                    </span>
                </span>
                <span class="text-zinc-600">
                    Arxiv
                </span>
            </a>
            <a target="_blank" :href="article.github" class="bg-orange-300/50 rounded-md px-2 py-[2px]  hover:bg-orange-300/75">
                <span class="w-6 h-6 text-center">
                    <span class="fa-brands fa-github text-zinc-600 fa-lg">
                    </span>
                </span>
                <span class="text-zinc-600">
                    Code
                </span>
            </a>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});

var hightlight_author = 'KaShun Shum'

function hightLightAuthor(text: string) :string {
    if(text){
        // For hightlight Name

        var reg = new RegExp(hightlight_author, 'gi');
        
        text = text.replace(reg, `<span class="font-bold text-zinc-600 underline">${hightlight_author}</span>`);


        return text;
    }
    else return text
}

</script>

<template>
    <div class="">
      <!-- Filter and order button -->
      <!-- <div class="fixed top-0 left-0 w-full bg-white shadow-md z-10"> -->
    <!-- <nav class=" w-full bg-white shadow-md z-10">

        <div class="flex justify-end p-4 max-w-4xl mx-auto">
          <button @click="sortByMostRecent" class="custom-button">
             Most Recent
          </button>
          <button @click="showFilter = !showFilter" class="custom-button">
             Filter
          </button>
        </div>
      </nav> -->
  
      <!-- Filter -->
      <transition name="slide-fade">
        <div
          v-if="showFilter"
          class="fixed left-0 w-full bg-white shadow-md p-4 z-20 rounded-md"
          style="top: 64px; transition: transform 0.3s ease;"
        >
          <div class="flex justify-around">
            <!-- Year Filter -->
            <div>
              <h3 class="font-semibold mb-2">Year</h3>
              <div class="flex space-x-2">
                <button 
                  v-for="year in years" 
                  :key="year" 
                  class="custom-button"
                  :class="{ 'bg-blue-500 text-white': selectedYear === year, 'bg-gray-200 text-black': selectedYear !== year }" 
                  @click="selectYear(year)"
                >
                  <span v-if="selectedYear === year" class="checkmark">✔</span>
                  {{ year }}
                </button>
              </div>
            </div>
  
            <!-- Conference Filter -->
            <div>
              <h3 class="font-semibold mb-2">Conference</h3>
              <div class="flex space-x-2">
                <button 
                  v-for="conference in conferences" 
                  :key="conference" 
                  class="custom-button"
                  :class="{ 'bg-blue-500 text-white': selectedConference === conference, 'bg-gray-200 text-black': selectedConference !== conference }" 
                  @click="selectConference(conference)"
                >
                  <span v-if="selectedConference === conference" class="checkmark">✔</span>
                  {{ conference }}
                </button>
              </div>
            </div>
  
            <!-- Tags Filter -->
            <div>
              <h3 class="font-semibold mb-2">Tags</h3>
              <div class="flex space-x-2">
                <button 
                  v-for="tag in tags" 
                  :key="tag" 
                  class="custom-button"
                  :class="{ 'bg-blue-500 text-white': selectedTags.includes(tag), 'bg-gray-200 text-black': !selectedTags.includes(tag) }" 
                  @click="toggleTag(tag)"
                >
                  <span v-if="selectedTags.includes(tag)" class="checkmark">✔</span>
                  {{ tag }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
  
      <!-- Article list -->
      <div class="">
        <ArtiCle
          v-for="(article) in visibleArticles"
          :key="article.id"
          :article="article"
        />
      </div>
  
      <!-- More Button-->
      <div class="text-center mt-6">
        <button v-if="canLoadMore" @click="loadMore" class="bg-blue-300/50 text-zinc-800 px-6 py-2 rounded-md">Show More</button>
      </div>
    </div>
  </template>
  
  <script setup >
  import { ref, computed } from 'vue';
  import ArtiCle from './helpers/Article.vue';
  import { articles as allArticles } from '../assets/info';
  
  // 初始化文章数据和显示数量
  const articles = ref(allArticles);
  const visibleCount = ref(4);  // 初始显示4篇
  const sorted = ref(false);
  const showFilter = ref(false);
  
  // 筛选状态
  const selectedYear = ref(null);
  const selectedConference = ref(null);
  const selectedTags = ref([]);
  
  // 可供选择的筛选项
  const years = [2024, 2023, 2022, 2021, 2020, 2019];
  const conferences = ['A', 'B', 'C'];
  const tags = ['AA', 'BB', 'CC'];
  
  // 计算当前显示的文章
  const visibleArticles = computed(() => {
    let filteredArticles = articles.value;
  
    // Filter by Year
    if (selectedYear.value) {
      filteredArticles = filteredArticles.filter(article => article.year === selectedYear.value);
    }
  
    // Filter by conference
    if (selectedConference.value) {
      filteredArticles = filteredArticles.filter(article => article.conference === selectedConference.value);
    }
  
    // Filter by Tag
    if (selectedTags.value.length > 0) {
      filteredArticles = filteredArticles.filter(article =>
        selectedTags.value.every(tag => article.tags.includes(tag))
      );
    }
  
    return filteredArticles.slice(0, visibleCount.value);
  });
  
  // check if can load more articles
  const canLoadMore = computed(() => {
    return true
    return visibleCount.value < articles.value.length;
  });
  
  // 加载更多文章
  const loadMore = () => {
    visibleCount.value += 3;
  };
  
  // 按日期排序文章
  const sortByMostRecent = () => {
    articles.value.sort((a, b) => new Date(b.date) - new Date(a.date));
  };
  sortByMostRecent();
  // 选择年份
  const selectYear = (year) => {
    selectedYear.value = year;
    applyFilters();
  };
  
  // 选择会议
  const selectConference = (conference) => {
    selectedConference.value = conference;
    applyFilters();
  };
  
  // 切换标签
  const toggleTag = (tag) => {
    if (selectedTags.value.includes(tag)) {
      selectedTags.value = selectedTags.value.filter(t => t !== tag);
    } else {
      selectedTags.value.push(tag);
    }
    applyFilters();
  };
  
  // 应用筛选条件
  const applyFilters = () => {
    visibleCount.value = 4; // 重新筛选时重置显示数量
  };
  </script>
  
  <style scoped>
  /* 按钮样式 */
  .custom-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3f4f6; /* 默认背景颜色 */
    color: #000;
    padding: 10px 20px;
    border: none;
    border-radius: 20px; /* 左右半圆 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .custom-button:hover {
    background-color: #e5e7eb; /* 悬停时颜色 */
  }
  
  /* 勾选图标 */
  .checkmark {
    margin-right: 8px; /* 图案与文字之间的间隔 */
    color: blue;
  }
  
  /* 过渡动画效果 */
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  .slide-fade-enter-from, .slide-fade-leave-to {
    transform: translateY(-100%);
    opacity: 0;
  }
  </style>
  
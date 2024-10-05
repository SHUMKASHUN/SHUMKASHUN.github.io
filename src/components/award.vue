<template>
    <div class="navbar-container flex w-full justify-center p-4  rounded-2xl border-2">
      <!-- 导航栏容器 -->
      <nav
        class="navbar w-full overflow-x-auto whitespace-nowrap cursor-grab"
        ref="navbar"
        @mousedown="startDragging"
        @mouseup="stopDragging"
        @mouseleave="stopDragging"
        @mousemove="onDragging"
      >
        <!-- 使用 flex 布局排列导航项 -->
        <!-- <ul class="nav-items flex space-x-4">
          <li v-for="(item, index) in navItems" :key="index" class="nav-item flex-shrink-0">
            <a href="#" class="nav-link block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
              {{ item }}
            </a>
            <div class="nav-link block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
              {{ item }}
            </div>
          </li>
        </ul> -->
        <div class="flex space-x-4 nav-items">
            <div class="flex flex-col content-center justify-center items-center space-y-4">
                <div class="mb-12">
                    2017
                </div>
                <div class="bg-[#d3e3e9] px-4 rounded-md">
                    xxx First Price
                </div>
                <div class="bg-[#d3e3e9] px-4 rounded-md">
                    xxx scholarship
                </div>
            </div>
            <div class="flex flex-col content-center justify-center items-center space-y-4">
                <div class="mb-12">
                    2018zoom
                </div>
                <div class="bg-[#d3e3e9] px-4 rounded-md">
                    yyyyyyyyyyy First Price
                </div>
                <div class="bg-[#d3e3e9] px-4 rounded-md">
                    yyyyyyyyyyyyyy scholarship
                </div>
            </div>
            <div class="flex flex-col content-center justify-center items-center space-y-4">
                <div class="mb-12">
                    2019
                </div>
                <div class="bg-[#d3e3e9] px-4 rounded-md">
                    xxx First Price
                </div>
                <div class="bg-[#d3e3e9] px-4 rounded-md">
                    xxx scholarship
                </div>
            </div>
            <div class="flex flex-col content-center justify-center items-center space-y-4">
                <div class="mb-12">
                    2020
                </div>
                <div class="bg-[#d3e3e9] px-4 rounded-md">
                    xxxxxxxx First Price
                </div>
                <div class="bg-[#d3e3e9] px-4 rounded-md">
                    xxxxxxxx scholarship
                </div>
            </div>
        </div>


      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 导航栏内容
  const navItems = ref([
    '首页', '关于我们', '服务', '产品', '新闻', '博客', '联系我们', '反馈', '帮助中心', '隐私政策', '条款与条件', '常见问题',
  ]);
  
  // 拖动相关变量
  const navbar = ref(null); // 用于获取导航栏的引用
  let isDragging = false; // 是否正在拖动
  let startX; // 开始时鼠标的 X 坐标
  let scrollLeft; // 开始时导航栏的滚动位置
  
  // 开始拖动
  const startDragging = (e) => {
    isDragging = true;
    startX = e.pageX - navbar.value.offsetLeft; // 获取鼠标相对于导航栏左边缘的起始位置
    scrollLeft = navbar.value.scrollLeft; // 记录起始滚动条的位置
    navbar.value.style.cursor = 'grabbing'; // 改变鼠标样式
  };
  
  // 停止拖动
  const stopDragging = () => {
    isDragging = false;
    navbar.value.style.cursor = 'grab'; // 恢复鼠标样式
  };
  
  // 当拖动过程中，更新导航栏的滚动位置
  const onDragging = (e) => {
    if (!isDragging) return; // 如果不是拖动状态则不处理
    e.preventDefault(); // 阻止默认行为，防止选中文本等
    const x = e.pageX - navbar.value.offsetLeft; // 获取当前鼠标的位置
    const walk = (x - startX) * 2; // 计算鼠标移动的距离，2 为加速倍数
    navbar.value.scrollLeft = scrollLeft - walk; // 根据移动的距离更新滚动条位置
  };
  </script>
  
  <style scoped>
  /* 隐藏滚动条 */
  .navbar::-webkit-scrollbar {
    display: none; /* 隐藏滚动条（适用于 Chrome 和 Safari） */
  }
  
  /* 鼠标样式 */
  .navbar {
    cursor: grab; /* 鼠标为手掌形状，提示可拖动 */
  }
  </style>
  
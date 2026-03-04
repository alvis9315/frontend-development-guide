<template>
  <div class="min-w-0">
    <!-- Header with responsive padding -->
    <header class="hero sticky top-0 z-50 bg-gradient-to-b from-indigo-50 to-slate-50 border-b border-gray-200 px-3 py-2 sm:px-4 sm:py-3 md:px-6 lg:px-8">
      <nav class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
        <div class="font-bold text-sm sm:text-base lg:text-lg tracking-wide break-words max-w-full">Frontend Development Guide</div>
      </nav>
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3">
        <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold break-words max-w-full">RDSS專案-前後端協作規範</h2>
        <span class="text-xs sm:text-sm text-gray-500 shrink-0">最後編輯日期：2026-03-04</span>
      </div>
    </header>

    <!-- Content wrapper with responsive layout -->
    <div class="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8">
      <!-- Sidebar - hidden on mobile, visible on desktop -->
      <aside class="hidden lg:block lg:flex-shrink-0 lg:w-64 lg:sticky lg:top-44 lg:self-start lg:max-h-[calc(100vh-11rem)] lg:overflow-y-auto">
        <nav class="bg-white rounded-xl p-5 shadow-lg">
          <div class="text-xl font-bold mb-4 text-slate-600">目錄</div>
          <ul class="space-y-1">
            <li 
              v-for="section in sections" 
              :key="section.id"
            >
              <a 
                :href="`#${section.id}`" 
                class="block px-3 py-2.5 text-gray-600 no-underline rounded-lg transition-all duration-200 text-sm hover:bg-slate-100 hover:text-slate-700 hover:translate-x-1"
                :class="{ 'bg-slate-100 text-slate-700 translate-x-1': activeSection === section.id }"
                @click.prevent="scrollToSection(section.id)"
              >
                {{ section.title }}
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Mobile navigation menu button -->
      <div class="lg:hidden fixed bottom-6 right-6 z-40">
        <button 
          @click="toggleMobileMenu"
          class="bg-indigo-600 text-white p-4 rounded-full shadow-xl hover:bg-indigo-700 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile menu overlay -->
      <div 
        v-if="showMobileMenu"
        class="lg:hidden fixed inset-0 w-screen bg-black bg-opacity-50 z-50"
        style="height: 100dvh; height: 100vh;"
        @click="toggleMobileMenu"
      >
        <div 
          class="absolute right-0 top-0 w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto"
          style="height: 100dvh; height: 100vh;"
          @click.stop
        >
          <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div class="text-xl font-bold text-slate-700">目錄</div>
            <button 
              @click="toggleMobileMenu"
              class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <ul class="p-4 space-y-2">
            <li 
              v-for="section in sections" 
              :key="section.id"
            >
              <a 
                :href="`#${section.id}`" 
                class="block px-4 py-3 text-gray-600 no-underline rounded-lg transition-all duration-200 hover:bg-slate-100 hover:text-slate-700"
                :class="{ 'bg-indigo-100 text-indigo-700 font-medium': activeSection === section.id }"
                @click="scrollToSectionMobile(section.id)"
              >
                {{ section.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Main content with responsive width -->
      <main id="sections" class="flex-1 min-w-0 w-full max-w-full overflow-x-hidden">
        <n-collapse :default-expanded-names="expandedNames" arrow-placement="right">
          <n-collapse-item 
            v-for="section in sections" 
            :key="section.id" 
            :name="section.id"
            :id="section.id"
          >
            <template #header>
              <div class="flex items-center justify-between w-full">
                <span class="text-lg md:text-xl lg:text-2xl font-bold">{{ section.title }}</span>
              </div>
            </template>
            <component :is="section.component" />
          </n-collapse-item>
        </n-collapse>
      </main>
    </div>

    <!-- Footer with responsive padding -->
    <footer class="py-8 md:py-10 px-4 text-center text-gray-500 border-t border-gray-200">
      <p class="text-sm md:text-base">© 2026 Frontend Communication Guide Template</p>
    </footer>
  </div>
</template>

<script setup>
import { defineAsyncComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import { NCollapse, NCollapseItem } from 'naive-ui'

const sections = [
  { 
    id: 'section-1',
    title: '1. API 協作規則',
    component: defineAsyncComponent(() => import('@/content/ApiFormat.vue'))
  },
  { 
    id: 'section-2',
    title: '2. 參數一致性',
    component: defineAsyncComponent(() => import('@/content/ResponseStructure.vue'))
  },
  { 
    id: 'section-3',
    title: '3. 日期與時間格式',
    component: defineAsyncComponent(() => import('@/content/DateTimeFormat.vue'))
  },
  { 
    id: 'section-4',
    title: '4. 分頁資料格式',
    component: defineAsyncComponent(() => import('@/content/PaginationFormat.vue'))
  },
  { 
    id: 'section-5',
    title: '5. API 呼叫方式',
    component: defineAsyncComponent(() => import('@/content/ApiCallMethod.vue'))
  },
  { 
    id: 'section-6',
    title: '6. 文字欄位長度',
    component: defineAsyncComponent(() => import('@/content/TextFieldLength.vue'))
  },
  { 
    id: 'section-7',
    title: '7. 上傳格式',
    component: defineAsyncComponent(() => import('@/content/UploadFormat.vue'))
  },
  { 
    id: 'section-8',
    title: '8. 下載格式',
    component: defineAsyncComponent(() => import('@/content/DownloadFormat.vue'))
  },
  { 
    id: 'section-9',
    title: '9. 下拉選單 API (待討論)',
    component: defineAsyncComponent(() => import('@/content/DropdownApi.vue'))
  },
  { 
    id: 'appendix',
    title: '10. 測試環境',
    component: defineAsyncComponent(() => import('@/content/TestEnvironment.vue'))
  },
  { 
    id: 'section-11',
    title: '11. 測試帳號',
    component: defineAsyncComponent(() => import('@/content/TestAccounts.vue'))
  }
]

const activeSection = ref(sections[0]?.id || '')
const showMobileMenu = ref(false)
let onScrollHandler
let rafId = null

// 預設全部展開
const expandedNames = sections.map(s => s.id)

// 切換移動版選單
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

// 滾動到指定章節
const scrollToSection = (sectionId) => {
  activeSection.value = sectionId
  const element = document.getElementById(sectionId)
  if (element) {
    // 如果是第一個section，直接滾動到頂部
    if (sectionId === 'section-1') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      return
    }
    
    // 其他section對齊sidebar位置
    const sidebarTop = 110
    const collapseItemMargin = 20
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - sidebarTop
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// 移動版滾動並關閉選單
const scrollToSectionMobile = (sectionId) => {
  scrollToSection(sectionId)
  toggleMobileMenu()
}

const updateActiveSection = () => {
  const offsetTop = 140
  const sectionElements = sections
    .map(section => document.getElementById(section.id))
    .filter(Boolean)

  if (!sectionElements.length) return

  let current = sectionElements[0]
  for (const el of sectionElements) {
    if (el.getBoundingClientRect().top - offsetTop <= 0) {
      current = el
    } else {
      break
    }
  }

  activeSection.value = current.id
}

onMounted(() => {
  onScrollHandler = () => {
    if (rafId) return
    rafId = requestAnimationFrame(() => {
      updateActiveSection()
      rafId = null
    })
  }

  window.addEventListener('scroll', onScrollHandler, { passive: true })
  window.addEventListener('resize', onScrollHandler, { passive: true })
  updateActiveSection()
})

onBeforeUnmount(() => {
  if (onScrollHandler) {
    window.removeEventListener('scroll', onScrollHandler)
    window.removeEventListener('resize', onScrollHandler)
  }
  if (rafId) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
})
</script>

<style scoped>
/* 使用 Tailwind 的 @apply 來保留必要的樣式 */
:deep(.n-collapse-item__header) {
  @apply mt-5 cursor-pointer;
}

:deep(.n-collapse-item__header-main) {
  @apply w-full;
}

:deep(.n-collapse-item__content) {
  @apply p-5;
}

/* 自定義滾動條樣式 */
aside::-webkit-scrollbar {
  width: 6px;
}

aside::-webkit-scrollbar-track {
  background: transparent;
}

aside::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

aside::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>

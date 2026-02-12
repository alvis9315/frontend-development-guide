<template>
  <div>
    <header class="hero">
      <nav class="nav">
        <div class="brand">Frontend Development Guide</div>
      </nav>
    <div style="display: flex; align-items: end; justify-content: space-between; gap: 16px;">
      <h2>RDSS專案-前後端協作規範</h2>
      <span style="font-size: 0.95rem; color: var(--muted); white-space: nowrap;">最後編輯日期：2026-02-12</span>
    </div>
    </header>

    <div class="content-wrapper">
      <!-- 左側導航 -->
      <aside class="sidebar">
        <nav class="sidebar-nav">
          <div class="sidebar-title">目錄</div>
          <ul class="sidebar-menu">
            <li 
              v-for="section in sections" 
              :key="section.id"
              class="sidebar-item"
            >
              <a 
                :href="`#${section.id}`" 
                class="sidebar-link"
                :class="{ active: activeSection === section.id }"
                @click.prevent="scrollToSection(section.id)"
              >
                {{ section.title }}
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- 主要內容 -->
      <main id="sections" class="container">
        <n-collapse :default-expanded-names="expandedNames" arrow-placement="right">
          <n-collapse-item 
            v-for="section in sections" 
            :key="section.id" 
            :name="section.id"
            :id="section.id"
          >
            <template #header>
              <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                <span style="font-size: 1.75rem; font-weight: 700;">{{ section.title }}</span>
              </div>
            </template>
            <component :is="section.component" />
          </n-collapse-item>
        </n-collapse>
      </main>
    </div>

    <footer class="footer">
      <p>© 2026 Frontend Communication Guide Template</p>
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
//   { 
//     id: 'section-5',
//     title: '5. 訊息顯示策略',
//     component: defineAsyncComponent(() => import('@/content/MessageStrategy.vue'))
//   },
//   { 
//     id: 'section-6',
//     title: '6. 多選欄位格式',
//     component: defineAsyncComponent(() => import('@/content/MultiSelectFormat.vue'))
//   },
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
let onScrollHandler
let rafId = null

// 预设全部展开
const expandedNames = sections.map(s => s.id)

// 滚动到指定章节
const scrollToSection = (sectionId) => {
  activeSection.value = sectionId
  const element = document.getElementById(sectionId)
  if (element) {
    // 如果是第一个section，直接滚动到顶部
    if (sectionId === 'section-1') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      return
    }
    
    // 其他section对齐sidebar位置，需要额外考虑collapse-item的margin-top: 20px
    const sidebarTop = 130 // 与sidebar的top保持一致
    const collapseItemMargin = 20 // n-collapse-item__header的margin-top
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - sidebarTop
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
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
.content-wrapper {
  display: flex;
  gap: 24px;
  margin: 0 auto;
  padding: 30px 50px;
}

.sidebar {
  flex-shrink: 0;
  /* width: 260px; */
  position: fixed;
  top: 180px;
  /* left: clamp(24px, 5vw, 80px); */
  height: fit-content;
  max-height: calc(100vh - 140px);
  overflow-y: auto;
}

.sidebar-nav {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.sidebar-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #475569;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-item {
  margin-bottom: 4px;
}

.sidebar-link {
  display: block;
  padding: 10px 12px;
  color: #6b7280;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-size: 0.95rem;
}

.sidebar-link:hover {
  background: #f1f5f9;
  color: #475569;
  transform: translateX(4px);
}

.sidebar-link.active {
  background: #f1f5f9;
  color: #475569;
  transform: translateX(4px);
}

.container {
  flex: 1;
  min-width: 0;
  padding: 0;
  margin-left: 284px;
}

@media (max-width: 1024px) {
  .content-wrapper {
    flex-direction: column;
  }
  
  .sidebar {
    position: static;
    width: 100%;
    max-height: none;
    margin-bottom: 32px;
  }
}
:deep(.n-collapse-item__header) {
  margin-top: 20px;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
  background: #ffffff; */
  cursor: pointer;
}

:deep(.n-collapse-item__header-main) {
  width: 100%;
}

:deep(.n-collapse-item__content) {
  padding: 20px;
}
</style>

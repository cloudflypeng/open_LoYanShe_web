<script setup lang="ts">
import type { Library, PaginationResponse, FilterList } from '@/types/api';
import { getLibraryList } from '@/api/library';
import { BASE_IMG } from '@/utils/ipConfig';

const id = useRoute().params.id as string
const filter_list = ref<FilterList[]>([
  {
    field: 'shop_id',
    op: 'and',
    value: id
  }
])

// 分页参数
const pageSize = 20
const page = ref(1)
const keyword = ref('')
const value = ref('')
const isLoading = ref(true)
const list = ref<Library[]>([])
const total = ref(0)

// 获取图鉴列表
const fetchLibraryList = async (): Promise<PaginationResponse<Library>> => {
  try {
    isLoading.value = true
    let params: any = {
      page: page.value,
      pageSize: pageSize,
      filter_list: filter_list.value,
      // need_Statistics: true
    }
    
    // 如果有搜索关键词，添加到参数中
    if (keyword.value) {
      params.keyword = keyword.value
    }
    
    console.log('API参数:', params)
    const response = await getLibraryList(params)
    console.log('API响应:', response)
    isLoading.value = false
    return response
  } catch (error) {
    isLoading.value = false
    if (process.client) {
      console.error('获取图鉴列表失败:', error)
    }
    return {
      rows: [],
      count: 0
    }
  }
}

// 只在客户端获取数据
const { data, refresh } = await useAsyncData(`shop-libraries-${id}`, fetchLibraryList, 
  {
    watch: [page, keyword],
    server: false // 不在服务端执行
  }
)

// 监听数据变化
watch(data, () => {
  console.log('数据变化:', data.value)
  if (page.value === 1) {
    list.value = data.value?.rows ?? []
  } else {
    list.value = [...list.value, ...(data.value?.rows ?? [])]
  }
  total.value = data.value?.count ?? 0
  console.log('当前列表长度:', list.value.length, '总数:', total.value)
}, { immediate: true })

// 搜索处理
const handleSearch = () => {
  keyword.value = value.value.trim()
  page.value = 1
}

// 清空搜索
const clearSearch = () => {
  value.value = ''
  keyword.value = ''
  page.value = 1
}

// 页码改变处理函数
const handlePageChange = (current: number) => {
  page.value = current
}

// 加载更多
const loadMore = () => {
  if (isLoading.value) {
    return
  }
  isLoading.value = true
  handlePageChange(page.value + 1)
}

// SEO 配置
useHead({
  title: '商店图鉴',
  meta: [
    {
      name: 'keywords',
      content: 'Lo研社,洛丽塔图鉴,Lolita,商店图鉴'
    },
    {
      name: 'description',
      content: '商店图鉴列表'
    }
  ]
})

definePageMeta({
  name: 'shop-detail'
})

// 确保页面加载时获取数据
onMounted(() => {
  console.log('页面加载，商店ID:', id)
  console.log('过滤器:', filter_list.value)
  console.log('当前数据状态:', data.value)
  console.log('当前列表:', list.value)
  console.log('总数:', total.value)
  
  // 在客户端获取数据
  console.log('客户端获取数据')
  // refresh()
})
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="mb-6">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">商店图鉴</h1>
        <span v-if="total > 0" class="text-sm text-gray-500">共 {{ total }} 个图鉴</span>
      </div>
      
      <!-- 搜索框 -->
      <div class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-4 pb-3">
        <div class="w-full flex items-center">
          <UInput
            v-model="value"
            placeholder="搜索图鉴 多条件空格分割."
            class="flex-1 focus:ring-0"
            @keyup.enter="handleSearch"
            :ui="{
              base: 'focus:ring-2 focus:ring-qhx-primary focus:border-qhx-primary',
              rounded: 'rounded-full',
              padding: { xs: 'px-4 py-2' },
              color: {
                white: {
                  outline: 'bg-gray-50 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-qhx-primary'
                }
              }
            }"
          />
          <UButton
            icon="i-heroicons-magnifying-glass"
            variant="ghost"
            color="gray"
            @click="handleSearch"
          />
          <UButton
            v-if="keyword"
            icon="i-heroicons-x-mark"
            variant="ghost"
            color="gray"
            @click="clearSearch"
            title="清空搜索"
          />
        </div>
      </div>
    </div>

    <!-- 图鉴列表 -->
    <div class="relative min-h-[600px]" v-if="total > 0">
      <!-- 加载状态 -->
      <div v-if="isLoading && list.length === 0" class="flex justify-center items-center py-8">
        <UIcon name="i-heroicons-arrow-path" class="animate-spin w-8 h-8 text-gray-500" />
        <span class="ml-2 text-gray-500">加载中...</span>
      </div>
      
      <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div v-for="library in list" :key="library.library_id" class="library-item">
          <LibraryItem :item="library" />
        </div>
      </div>
      
      <!-- 加载更多按钮 -->
      <div v-if="list.length < total" class="mt-8 flex justify-center">
        <UButton
          :loading="isLoading"
          @click="loadMore"
          variant="outline"
          color="gray"
        >
          {{ isLoading ? '加载中...' : '加载更多' }}
        </UButton>
      </div>
    </div>
    
    <!-- 空状态 -->
    <div v-else class="text-center text-gray-500 py-8">
      暂无图鉴数据
    </div>
  </div>
</template>

<style scoped>
.library-item {
  transition: transform 0.2s ease-in-out;
}

.library-item:hover {
  transform: translateY(-2px);
}
</style>



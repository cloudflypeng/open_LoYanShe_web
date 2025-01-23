<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ title: 'lo 研社社区' })
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="lo 研社社区" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="社区动态" />
      <div>内容区域</div>
    </LayoutPageSection>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="热门讨论" />
      <div>内容区域</div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>

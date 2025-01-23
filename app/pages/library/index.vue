<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ title: 'lo 研社图鉴' })
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="lo 研社图鉴" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="图鉴列表" />
      <div>内容区域</div>
    </LayoutPageSection>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="其他内容" />
      <div>内容区域</div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>

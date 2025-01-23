<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ title: 'lo 研社百科' })
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="lo 研社百科" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="百科目录" />
      <div>内容区域</div>
    </LayoutPageSection>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="最近更新" />
      <div>内容区域</div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>

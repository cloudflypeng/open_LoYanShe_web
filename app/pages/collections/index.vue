<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ title: 'lo 研社合集' })
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="lo 研社合集" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="精选合集" />
      <div>内容区域</div>
    </LayoutPageSection>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="最新合集" />
      <div>内容区域</div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>

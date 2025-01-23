<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ title: '关于 lo 研社' })
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="关于 lo 研社" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="关于我们" />
      <div>内容区域</div>
    </LayoutPageSection>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="联系方式" />
      <div>内容区域</div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>

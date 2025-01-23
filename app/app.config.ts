import type { AppConfigInput } from 'nuxt/schema'

export default defineAppConfig({
  awesome: {
    name: 'lo 研社',
    description:
      'a starter template for Nuxt 3 with minimalist themes design, built in components, drawer & menus, and more.',
    project: {
      links: {
        github: 'https://github.com/viandwi24/nuxt3-awesome-starter',
      },
    },
    layout: {
      page: {
        navbar: {
          menus: [
            { type: 'link', title: '首页', to: { name: 'index' } },
            // 图鉴
            { type: 'link', title: '图鉴', to: { name: 'library' } },
            // 店铺
            { type: 'link', title: '店铺', to: { name: 'shop' } },
            // 合集
            { type: 'link', title: '合集', to: { name: 'collections' } },
            // 社区
            { type: 'link', title: '社区', to: { name: 'community' } },
            // 百科
            { type: 'link', title: '百科', to: { name: 'wiki' } },
            // 关于
            { type: 'link', title: '关于', to: { name: 'about' } },
          ],
        },
      },
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'Nuxt&nbsp;3 Awesome Starter',
        disableInfoReplaceIndexInWelcomePage: true,
      },
    },
    author: {
      name: 'viandwi24',
      links: {
        github: 'https://github.com/viandwi24',
        medium: 'https://viandwi24.medium.com',
        website: 'https://viandwi24.site',
      },
    },
  },
})

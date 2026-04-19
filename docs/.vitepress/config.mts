import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "Project Everything",
    description: "A collaborative world building project.",
    base: '/',
    head: [
        ['link', {rel: 'icon', href: '/logo.png', type: 'image/png'}],
    ],
    themeConfig: {
        logo: '/logo.png',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Getting Started', link: '/introduction/getting-started/'},
            {text: 'Guide', link: '/introduction/definitions/'},
            {text: 'Google Drive', link: 'https://drive.google.com/drive/folders/13E1IdZO7FhT1a0q6orU3cZqq6rwmxMvL?usp=sharing'}
        ],
        sidebar: [
            {
                text: 'Introduction',
                collapsed: false,
                items: [
                    {text: 'Getting Started', link: '/introduction/getting-started/'},
                    {text: 'Definitions', link: '/introduction/definitions/'}
                ]
            },
            {
                text: 'Guide',
                collapsed: false,
                items: [
                    {text: 'Style Guidelines', link: '/guide/style-guidelines/'},
                    {text: 'Power & Influence', link: '/guide/power-and-influence/'},
                    {text: 'Primal Ranking', link: '/guide/primal-ranking/'}
                ]
            }
        ],
        socialLinks: [
            {icon: 'discord', link: 'https://discord.gg/T7JwvNBf2a'},
            {icon: 'github', link: 'https://github.com/Project-Everything/'}
        ],
        footer: {
            message: 'If you need support, contact us at: support@projecteverything.net',
            copyright: '© 2026 Project Everything - All Rights Reserved'
        }
    },
    markdown: {
        theme: {
            light: "catppuccin-latte",
            dark: "catppuccin-mocha"
        }
    }
})

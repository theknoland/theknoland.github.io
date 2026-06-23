// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


const site = 'https://knoland.com';


// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		starlight({
			title: 'Knoland Specs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/theknoland/theknoland.github.io' }],
			sidebar: [
				{
					label: 'Knoland',
					items: [
						{ label: 'Genesis', slug: 'index' },
						{ label: 'Statements', slug: 'statements' },
						{ label: 'Glossary', slug: 'glossary' },
					],
				},
				{
					label: 'Spiritual',
					items: [{ autogenerate: { directory: 'spiritual' } }],
				},
				{
					label: 'Legal',
					items: [{ autogenerate: { directory: 'legal' } }],
				},
				{
					label: 'Structural',
					items: [{ autogenerate: { directory: 'structural' } }],
				},
				{
					label: 'Functional',
					items: [{ autogenerate: { directory: 'functional' } }],
				},
				{
					label: 'Architectural',
					items: [{ autogenerate: { directory: 'architectural' } }],
				},
				{
					label: 'Financial',
					items: [{ autogenerate: { directory: 'financial' } }],
				},
			],
		}),
	],
});

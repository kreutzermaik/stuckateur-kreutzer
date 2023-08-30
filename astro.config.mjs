import {defineConfig} from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from 'astro-icon';
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        svelte(),
        icon({
            include: {
                tabler: ['*'],
                'flat-color-icons': [
                    'template',
                    'gallery',
                    'approval',
                    'document',
                    'advertising',
                    'currency-exchange',
                    'voice-presentation',
                    'business-contact',
                    'database',
                ],
            },
        }),
    ]
});
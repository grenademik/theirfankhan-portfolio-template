import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.APP_SANITY_ID,
    dataset: 'production',
    apiVersion: '2024-06-06',
    useCdn: true,
    token: process.env.APP_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);


export async function getTestimonials() {
    const testimonials = await client.fetch('*[_type == "testimonials"]')
    return testimonials
}
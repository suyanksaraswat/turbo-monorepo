import {defineField, defineType} from 'sanity'

export const secondaryFeaturesInfo = defineType({
  type: 'object',
  name: 'secondaryFeaturesInfo',
  fields: [
    defineField({
      name: 'feature',
      title: 'Feature',
      type: 'reference',
      to: {type: 'feature'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'summary',
      title: 'Summary',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'image',
      name: 'iconImage',
      title: 'Icon Image',
      description: "SVG's are prefered",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'feature.title',
      media: 'iconImage',
    },
  },
})

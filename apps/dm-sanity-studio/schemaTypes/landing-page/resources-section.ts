import {defineField, defineType} from 'sanity'

export const resourcesSection = defineType({
  type: 'object',
  name: 'resourcesSection',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    },
    defineField({
      type: 'string',
      name: 'subtitle',
      title: 'Subtitle',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'resources',
      title: 'Resources',
      of: [{type: 'reference', to: {type: 'post'}}],
      validation: (rule) => rule.required().length(3),
    }),
  ],
})

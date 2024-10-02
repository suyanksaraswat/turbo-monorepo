import {defineField, defineType} from 'sanity'

export const ctaSection = defineType({
  type: 'object',
  name: 'ctaSection',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'subtitle',
      title: 'Subtitle',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'actionButtonText',
      title: 'Action Button Text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'actionButtonLink',
      title: 'Action Button Link',
      validation: (rule) => rule.required(),
    }),
  ],
})

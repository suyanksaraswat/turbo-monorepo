import {defineField, defineType} from 'sanity'

export const cSPCtaSection = defineType({
  type: 'object',
  name: 'cSPCtaSection',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'description',
      title: 'Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'primaryCtaText',
      title: 'Primary CTA Text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'primaryCtaLink',
      title: 'Primary CTA Link',
      validation: (rule) => rule.required(),
    }),
  ],
})

import {defineArrayMember, defineField, defineType} from 'sanity'

export const faqsSection = defineType({
  type: 'object',
  name: 'faqsSection',
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
      type: 'array',
      name: 'faqs',
      title: 'FAQs',
      of: [
        defineArrayMember({
          type: 'reference',
          to: {type: 'faq'},
        }),
      ],
      validation: (rule) => rule.required().length(9),
    }),
  ],
})

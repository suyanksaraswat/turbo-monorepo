import {defineType, defineField, defineArrayMember} from 'sanity'

export const heroSection = defineType({
  type: 'object',
  name: 'heroSection',
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
      name: 'primaryActionButtonText',
      title: 'Primary Action Button Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'primaryActionButtonLink',
      title: 'Primary Action Button Link',
      validation: (rule) => rule.required(),
      initialValue: '/contact-sales',
    }),
    defineField({
      type: 'string',
      name: 'secondaryActionButtonText',
      title: 'Secondary Action Button Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'secondaryActionButtonLink',
      title: 'Secondary Action Button Link',
      validation: (rule) => rule.required(),
      initialValue: 'https://cal.com/galensimmons/initial-sales-call',
    }),
    defineField({
      type: 'image',
      name: 'secondaryActionButtonIcon',
      title: 'Secondary Action Button Icon',
    }),
    defineField({
      type: 'string',
      name: 'trustStatementText',
      title: 'Trust Statement Text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'clients',
      title: 'Clients',
      of: [
        defineArrayMember({
          type: 'clientInfo',
        }),
      ],
      validation: (rule) => rule.required().length(6),
    }),
  ],
})

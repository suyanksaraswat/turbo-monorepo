import {defineArrayMember, defineField, defineType} from 'sanity'

export const pricingSection = defineType({
  type: 'object',
  name: 'pricingSection',
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
      name: 'plans',
      title: 'Plans',
      of: [
        defineArrayMember({
          type: 'reference',
          to: {
            type: 'pricingPlan',
          },
        }),
      ],
      validation: (rule) => rule.required().length(3),
    }),
    defineField({
      type: 'string',
      name: 'ctaBasePath',
      title: 'CTA Base Path',
      description:
        'Link to base path for the CTA button. For different plans we can update the base path to pass the clicked plan info as well.',
      validation: (rule) => rule.required(),
    }),
  ],
})

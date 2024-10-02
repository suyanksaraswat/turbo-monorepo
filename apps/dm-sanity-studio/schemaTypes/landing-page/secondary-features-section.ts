import {defineArrayMember, defineField, defineType} from 'sanity'

export const secondaryFeaturesSection = defineType({
  type: 'object',
  name: 'secondaryFeaturesSection',
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
      name: 'features',
      of: [
        defineArrayMember({
          type: 'secondaryFeaturesInfo',
        }),
      ],
      validation: (rule) => rule.required().length(3),
    }),
  ],
})

import {defineArrayMember, defineField, defineType} from 'sanity'

export const primaryFeaturesSection = defineType({
  type: 'object',
  name: 'primaryFeaturesSection',
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
      title: 'Features',
      of: [
        defineArrayMember({
          type: 'reference',
          to: {type: 'feature'},
        }),
      ],
      validation: (rule) => rule.required().length(4),
    }),
  ],
})

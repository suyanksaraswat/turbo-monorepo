import {defineArrayMember, defineField, defineType} from 'sanity'

export const testimonialsSection = defineType({
  type: 'object',
  name: 'testimonialsSection',
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
      name: 'testimonials',
      title: 'Testimonials',
      of: [
        defineArrayMember({
          type: 'reference',
          to: {
            type: 'testimonial',
          },
        }),
      ],
      validation: (rule) => rule.required().length(6),
    }),
  ],
})

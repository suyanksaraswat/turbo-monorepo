import {defineArrayMember, defineField, defineType} from 'sanity'

export const cSPFeaturesSection = defineType({
  type: 'object',
  name: 'cSPFeaturesSection',
  fields: [
    defineField({
      type: 'array',
      name: 'features',
      of: [
        defineArrayMember({
          type: 'object',
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
              name: 'materialIcon',
              title: 'Material Icon Name',
              description: 'Find icons from here: https://fonts.google.com/icons',
              validation: (rule) => rule.required(),
            }),
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
              name: 'imgAlt',
              title: 'ImgAlt',
            }),
          ],
        }),
      ],
    }),
  ],
})

import {defineField, defineType} from 'sanity'

export const clientInfo = defineType({
  type: 'object',
  name: 'clientInfo',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'image',
      name: 'logo',
      title: 'Logo',
      validation: (rule) => rule.required(),
    }),
  ],
})

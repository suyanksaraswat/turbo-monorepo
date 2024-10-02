import {defineField, defineType} from 'sanity'

export const unitPhotos = defineType({
  name: 'unitPhotos',
  title: 'Unit Photos',
  type: 'document',
  fields: [
    defineField({
      name: 'unitId',
      title: 'Unit',
      type: 'reference',
      to: [{type: 'unit'}],
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ],
})

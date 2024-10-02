import {defineField, defineType} from 'sanity'

export const propertyPhotos = defineType({
  name: 'propertyPhotos',
  title: 'Property Photos',
  type: 'document',
  fields: [
    defineField({
      name: 'propertyId',
      title: 'Property',
      type: 'reference',
      to: [{type: 'property'}],
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

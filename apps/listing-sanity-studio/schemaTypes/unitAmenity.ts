import {defineField, defineType} from 'sanity'

export const unitAmenity = defineType({
  name: 'unitAmenity',
  title: 'Unit Amenity',
  type: 'document',
  fields: [
    defineField({
      name: 'unitId',
      title: 'Unit',
      type: 'reference',
      to: [{type: 'unit'}],
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
    }),
  ],
})

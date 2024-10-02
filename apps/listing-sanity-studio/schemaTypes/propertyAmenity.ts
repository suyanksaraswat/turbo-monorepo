import {defineField, defineType} from 'sanity'

export const propertyAmenity = defineType({
  name: 'propertyAmenity',
  title: 'Property Amenity',
  type: 'document',
  fields: [
    defineField({
      name: 'propertyId',
      title: 'Property',
      type: 'reference',
      to: [{type: 'property'}],
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

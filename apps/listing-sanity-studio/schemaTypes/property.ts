import {defineField, defineType} from 'sanity'

export const property = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'propertyName',
      title: 'Property Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'building',
      title: 'Building',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'building'}]}],
    }),
    defineField({
      name: 'amenities',
      title: 'Property Amenities',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'propertyAmenity'}]}],
    }),
    defineField({
      name: 'photos',
      title: 'Property Photos',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'propertyPhotos'}]}],
    }),
    defineField({
      name: 'petPolicy',
      title: 'Pet policy',
      type: 'boolean',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    }),
  ],
  preview: {
    select: {
      title: 'propertyName',
      subtitle: 'propertyId',
    },
  },
})

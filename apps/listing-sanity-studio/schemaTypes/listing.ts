import {defineField, defineType} from 'sanity'

export const listing = defineType({
  name: 'listing',
  title: 'Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'available',
      title: 'Available',
      type: 'boolean',
    }),
    defineField({
      name: 'unitId',
      title: 'Unit',
      type: 'reference',
      to: [{type: 'unit'}],
    }),
    defineField({
      name: 'listingPhotos',
      title: 'Listing Photos',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    }),
  ],
})

import {defineField, defineType} from 'sanity'

export const floorPlan = defineType({
  name: 'floorPlan',
  title: 'Floor Plan',
  type: 'document',
  fields: [
    defineField({
      name: 'unitTypeId',
      title: 'Unit Type',
      type: 'reference',
      to: [{type: 'unitType'}],
    }),
    defineField({
      name: 'photoId',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'name',
      title: 'Floor Plan Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
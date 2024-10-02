import {defineField, defineType} from 'sanity'

export const building = defineType({
  name: 'building',
  title: 'Building',
  type: 'document',
  fields: [
    defineField({
      name: 'propertyId',
      title: 'Property',
      type: 'reference',
      to: [{type: 'property'}],
    }),
    defineField({
      name: 'buildingNumber',
      title: 'Building Number',
      type: 'string',
    }),
    defineField({
      name: 'buildingName',
      title: 'Building name',
      type: 'string',
    }),
    defineField({
      name: 'buildingType',
      title: 'Building type',
      type: 'string',
    }),
    defineField({
      name: 'buildingAge',
      title: 'Building age',
      type: 'string',
    }),
    defineField({
      name: 'yearBuilt',
      title: 'Year built',
      type: 'number',
    }),
    defineField({
      name: 'totalUnits',
      title: 'Total units',
      type: 'number',
    }),
    defineField({
      name: 'totalFloors',
      title: 'Total floors',
      type: 'number',
    }),
    defineField({
      name: 'unit',
      title: 'Unit',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'unit'}]}],
    }),
    defineField({
      name: 'address1',
      title: 'Address 1',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
    }),
    defineField({
      name: 'zip',
      title: 'ZIP Code',
      type: 'string',
    }),
  ],
})
import { defineField, defineType } from "sanity";

export const unitType = defineType({
  name: 'unitType',
  title: 'Unit Type',
  type: 'document',
  fields: [
    defineField({
      name: 'propertyId',
      title: 'Property ID',
      type: 'reference',
      to: [{type: 'property'}],
    }),
    defineField({
      name: 'name',
      title: 'Unit Type Name',
      type: 'string',
    }),
    defineField({
      name: 'bedrooms',
      title: 'Number of Bedrooms',
      type: 'number',
    }),
    defineField({
      name: 'bathrooms',
      title: 'Number of Bathrooms',
      type: 'number',
    }),
    defineField({
      name: 'squareFoot',
      title: 'Square Foot',
      type: 'number',
    }),
    defineField({
      name: 'floorPlans',
      title: 'Floor Plans',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'floorPlan'}]}],
    }),
  ],
})
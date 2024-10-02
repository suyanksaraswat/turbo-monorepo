import {defineField, defineType} from 'sanity'

export const unit = defineType({
  name: 'unit',
  title: 'Unit',
  type: 'document',
  fields: [
    defineField({
      name: 'buildingId',
      title: 'Building',
      type: 'reference',
      to: [{type: 'building'}],
    }),
    defineField({
      name: 'unitNumber',
      title: 'Unit Number',
      type: 'string',
    }),
    defineField({
      name: 'unitTypeId',
      title: 'Unit Type',
      type: 'reference',
      to: [{type: 'unitType'}],
      options: {
        filter: ({document}: any) => {
          return {
            filter: `
              propertyId._ref == *[_type == "building" && _id == $buildingId][0].propertyId._ref
            `,
            params: {
              buildingId: document?.buildingId?._ref,
            },
          }
        },
      },
    }),
    defineField({
      name: 'floorPlanId',
      title: 'Floor Plan',
      type: 'reference',
      to: [{type: 'floorPlan'}],
      options: {
        filter: ({document}: any) => {
          if (!document.unitTypeId) {
            return {filter: '_type == "floorPlan"'}
          }

          const unitTypeId = document.unitTypeId?._ref

          return {
            filter: `
              _type == "floorPlan" && _id in *[_type == "unitType" && _id == $unitTypeId][0].floorPlans[]._ref
            `,
            params: {
              unitTypeId: unitTypeId,
            },
          }
        },
      },
    }),
    defineField({
      name: 'floorNumber',
      title: 'Floor Number',
      type: 'number',
    }),
    defineField({
      name: 'amenities',
      title: 'Unit amenities',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'unitAmenity'}]}],
    }),
    defineField({
      name: 'photos',
      title: 'Unit photos',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'unitPhotos'}]}],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Available', value: 'available'},
          {title: 'Occupied', value: 'occupied'},
          {title: 'Maintenance', value: 'maintenance'},
        ],
      },
    }),
  ],
})

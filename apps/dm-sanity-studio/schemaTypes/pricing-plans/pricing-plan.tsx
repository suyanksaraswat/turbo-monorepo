import React from 'react'
import {defineType, defineField} from 'sanity'
import {getStatusInfo, StatusMedia} from '../../utils'

export const pricingPlan = defineType({
  type: 'document',
  name: 'pricingPlan',
  title: 'Pricing Plans',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'description',
      title: 'Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'price',
      title: 'Price',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'featuresOffered',
      title: 'Features Offered',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      docId: '_id',
    },
    prepare: ({title, docId}) => {
      const {statusColor, statusCode} = getStatusInfo(docId)

      return {
        title: title,
        media: <StatusMedia statusCode={statusCode} statusColor={statusColor} />,
      }
    },
  },
})

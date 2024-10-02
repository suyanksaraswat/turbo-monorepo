import React from 'react'
import {defineField, defineType} from 'sanity'
import {getStatusInfo, StatusMedia} from '../../utils'

export const category = defineType({
  type: 'document',
  name: 'category',
  title: 'Resource Category',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      docId: '_id',
    },

    prepare({title, docId}) {
      const {statusColor, statusCode} = getStatusInfo(docId)

      return {
        title: title,
        media: <StatusMedia statusCode={statusCode} statusColor={statusColor} />,
      }
    },
  },
})

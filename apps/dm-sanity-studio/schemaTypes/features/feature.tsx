import React from 'react'
import {defineField, defineType} from 'sanity'
import {getStatusInfo, StatusMedia} from '../../utils'

export const feature = defineType({
  type: 'document',
  name: 'feature',
  title: 'Features',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'description',
      title: 'Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'image',
      name: 'image',
      title: 'Image',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
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

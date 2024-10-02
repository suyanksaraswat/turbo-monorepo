import React from 'react'
import {defineType, defineField} from 'sanity'
import {getStatusInfo, StatusMedia} from '../../utils'

export const faq = defineType({
  type: 'document',
  name: 'faq',
  title: 'FAQs',
  fields: [
    defineField({
      type: 'string',
      name: 'question',
      title: 'Question',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'answer',
      title: 'Answer',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'question',
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

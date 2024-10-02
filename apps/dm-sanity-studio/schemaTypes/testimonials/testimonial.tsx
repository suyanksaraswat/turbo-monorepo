import {defineType, defineField} from 'sanity'
import {getStatusInfo, StatusMedia} from '../../utils'
import React from 'react'

export const testimonial = defineType({
  type: 'document',
  name: 'testimonial',
  title: 'Testimonials',
  fields: [
    defineField({
      type: 'string',
      name: 'text',
      title: 'Text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'authorName',
      title: 'Author Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'authorRole',
      title: 'Author Role',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'image',
      name: 'authorImage',
      title: 'Author Image',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'authorName',
      subtitle: 'authorRole',
      docId: '_id',
    },
    prepare: ({title, subtitle, docId}) => {
      const {statusCode, statusColor} = getStatusInfo(docId)

      return {
        title,
        subtitle,
        media: <StatusMedia statusCode={statusCode} statusColor={statusColor} />,
      }
    },
  },
})

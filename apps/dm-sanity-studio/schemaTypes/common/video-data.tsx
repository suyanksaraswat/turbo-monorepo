import {defineField, defineType} from 'sanity'
import {VideoPreview} from './video-preview'

export const videoData = defineType({
  type: 'object',
  name: 'videoData',
  title: 'Video Data',
  fields: [
    defineField({
      type: 'url',
      name: 'url',
      title: 'Video URL',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'url'},
  },
  components: {
    preview: VideoPreview,
  },
})

// templateA.js
import {defineField} from 'sanity'

export const template2Fields = [
  defineField({
    name: 'banner2Images',
    title: 'Hero2 Banner Images',
    type: 'array',
    of: [{type: 'image'}],
  }),
]

import {defineType, defineField} from 'sanity'

export const cSPHeroSection = defineType({
  type: 'object',
  name: 'cSPHeroSection',
  fields: [
    defineField({
      type: 'string',
      name: 'announcementText',
      title: 'Announcement Text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      description:
        'Use italics for the text which should be highlighted. Note: Use Italics and Normal Text only. ',
      type: 'array',
      of: [{type: 'block'}],
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
      name: 'ctaText',
      title: 'CTA Text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'introVideoLink',
      title: 'Intro Video Link',
      description: "Leave the field empty if don't want to link a video.",
    }),
    defineField({
      type: 'image',
      name: 'introVideoPlaceholderImg',
      title: 'Intro Video Thumbnail',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
})

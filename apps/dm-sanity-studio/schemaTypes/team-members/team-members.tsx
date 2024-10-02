import {defineField, defineType} from 'sanity'

export const teamMembers = defineType({
  type: 'document',
  name: 'teamMembers',
  title: 'Team Members',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'role',
      title: 'Role',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'xUrl',
      title: 'X Profile Url',
    }),
    defineField({
      type: 'string',
      name: 'linkedinUrl',
      title: 'LinkedIn Profile Url',
    }),
    defineField({
      type: 'image',
      name: 'img',
      title: 'Image',
      options: {
        hotspot: true,
      },
    }),
  ],
})

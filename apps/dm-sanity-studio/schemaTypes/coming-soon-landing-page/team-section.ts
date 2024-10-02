import {defineArrayMember, defineField, defineType} from 'sanity'

export const cSPTeamSection = defineType({
  type: 'object',
  name: 'cSPTeamSection',
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
      type: 'array',
      name: 'teamMembers',
      title: 'Team Members',
      of: [
        defineArrayMember({
          type: 'reference',
          to: {type: 'teamMembers'},
        }),
      ],
    }),
  ],
})

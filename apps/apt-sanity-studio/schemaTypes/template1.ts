// templateA.js
import {defineField} from 'sanity'

export const template1Fields = [
  defineField({
    name: 'logo',
    title: 'Hero Logo',
    type: 'image',
    options: {
      hotspot: true,
    },
  }),
  defineField({
    name: 'bannerImages',
    title: 'Hero Banner Images',
    type: 'array',
    of: [{type: 'image'}],
  }),
  defineField({
    name: 'home',
    title: 'Home Page',
    type: 'object',
    fields: [
      defineField({
        name: 'sections',
        title: 'Sections',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'title',
                title: 'Section Title',
                type: 'string',
              }),
              defineField({
                name: 'heading',
                title: 'Section Heading',
                type: 'string',
              }),
              defineField({
                name: 'subHeading',
                title: 'Section Sub Heading',
                type: 'string',
              }),
              defineField({
                name: 'text',
                title: 'Section Content',
                type: 'array',
                of: [{type: 'text'}],
              }),
              defineField({
                name: 'images',
                title: 'Section Images',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      defineField({
                        name: 'image',
                        title: 'Image',
                        type: 'image',
                        options: {
                          hotspot: true,
                        },
                      }),
                      defineField({
                        name: 'caption',
                        title: 'Caption',
                        type: 'string',
                      }),
                    ],
                  },
                ],
              }),
            ],
          },
        ],
      }),
    ],
  }),
  defineField({
    name: 'amenities',
    title: 'Amenities Page',
    type: 'object',
    fields: [
      defineField({
        name: 'heading',
        title: 'Page Heading',
        type: 'string',
      }),
      defineField({
        name: 'disclaimer',
        title: 'Disclaimer',
        type: 'string',
      }),
      defineField({
        name: 'subheadings',
        title: 'Categories',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'title',
                title: 'Category Title',
                type: 'string',
              }),
              defineField({
                name: 'amenities',
                title: 'Amenities List',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      defineField({
                        name: 'name',
                        title: 'Amenity Name',
                        type: 'string',
                      }),
                      defineField({
                        name: 'image',
                        title: 'Image',
                        type: 'image',
                      }),
                    ],
                  },
                ],
              }),
            ],
          },
        ],
      }),
    ],
  }),
  defineField({
    name: 'photos',
    title: 'Photos Page',
    type: 'object',
    fields: [
      defineField({
        name: 'heading',
        title: 'Heading',
        type: 'string',
      }),
      defineField({
        name: 'paragraph',
        title: 'Paragraph',
        type: 'text',
      }),
      defineField({
        name: 'photos',
        title: 'Photos',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ],
      }),
    ],
  }),
  defineField({
    name: 'availability',
    title: 'Availability Page',
    type: 'object',
    fields: [
      defineField({
        name: 'heading',
        title: 'Page Heading',
        type: 'string',
      }),
      defineField({
        name: 'iframe',
        title: 'Iframe',
        type: 'text',
      }),
    ],
  }),
  defineField({
    name: 'contact',
    title: 'Contact Page',
    type: 'object',
    fields: [
      defineField({
        name: 'heading',
        title: 'Page Heading',
        type: 'string',
      }),
      defineField({
        name: 'phoneNumber',
        title: 'Phone Number',
        type: 'string',
      }),
      defineField({
        name: 'hoursOfOperation',
        title: 'Hours of Operation',
        type: 'array',
        of: [{type: 'string'}],
      }),
      defineField({
        name: 'address',
        title: 'Address',
        type: 'string',
      }),
    ],
  }),
]

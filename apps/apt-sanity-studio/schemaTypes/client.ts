import {defineField, defineType} from 'sanity'

export const client = defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'notification',
      title: 'Notification',
      type: 'string',
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{type: 'image'}],
        }),
        defineField({
          name: 'logo',
          title: 'Banner Logo',
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'community',
      title: 'Community',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{type: 'image'}],
        }),
        defineField({
          name: 'isEnabled',
          title: 'Enable Section',
          type: 'boolean',
        }),
      ],
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{type: 'text'}],
        }),
        defineField({
          name: 'categories',
          title: 'Amenity Categories',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Category Name',
                  type: 'string',
                }),
                defineField({
                  name: 'amenities',
                  title: 'Amenities',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        defineField({
                          name: 'image',
                          title: 'Image',
                          type: 'image',
                        }),
                        defineField({
                          name: 'title',
                          title: 'Title',
                          type: 'string',
                        }),
                        defineField({
                          name: 'description',
                          title: 'Description',
                          type: 'text',
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
      name: 'availability',
      title: 'Availability Iframe',
      type: 'text',
    }),
    defineField({
      name: 'news',
      title: 'News',
      type: 'object',
      fields: [
        defineField({
          name: 'newsItems',
          title: 'News Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'date',
                  title: 'Date',
                  type: 'date',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{type: 'image'}],
        }),
        defineField({
          name: 'isEnabled',
          title: 'Enable Section',
          type: 'boolean',
        }),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'categories',
          title: 'Categories',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Category Name',
                  type: 'string',
                }),
                defineField({
                  name: 'images',
                  title: 'Images',
                  type: 'array',
                  of: [{type: 'image'}],
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'schedule',
      title: 'Schedule',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{type: 'image'}],
        }),
      ],
    }),
    defineField({
      name: 'floorPlans',
      title: 'Floor Plans',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'plans',
          title: 'Floor Plans',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'bedrooms',
                  title: 'Number of Bedrooms',
                  type: 'number',
                }),
                defineField({
                  name: 'bathrooms',
                  title: 'Number of Bathrooms',
                  type: 'number',
                }),
                defineField({
                  name: 'squareFeet',
                  title: 'Square Feet',
                  type: 'number',
                }),
                defineField({
                  name: 'availableUnits',
                  title: 'Available Units',
                  type: 'number',
                }),
                defineField({
                  name: 'ratePerMonth',
                  title: 'Rate per Month',
                  type: 'number',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'neighbourhood',
      title: 'Neighbourhood',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
        }),
        defineField({
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        defineField({
          name: 'officeHours',
          title: 'Office Hours',
          type: 'array',
          of: [{type: 'string'}],
        }),
        defineField({
          name: 'phoneNumber',
          title: 'Phone Number',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
        defineField({
          name: 'social',
          title: 'Social Media',
          type: 'object',
          fields: [
            defineField({
              name: 'facebook',
              title: 'Facebook Link',
              type: 'url',
            }),
            defineField({
              name: 'instagram',
              title: 'Instagram Link',
              type: 'url',
            }),
            defineField({
              name: 'twitter',
              title: 'Twitter Link',
              type: 'url',
            }),
            defineField({
              name: 'youtube',
              title: 'YouTube Link',
              type: 'url',
            }),
          ],
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'text',
        }),
        defineField({
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{type: 'image'}],
        }),
      ],
    }),
    defineField({
      name: 'directions',
      title: 'Directions',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'latitude',
          title: 'Latitude',
          type: 'number',
        }),
        defineField({
          name: 'longitude',
          title: 'Longitude',
          type: 'number',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
})

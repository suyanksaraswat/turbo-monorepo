import React from 'react'
import {defineField, defineType} from 'sanity'
import {StatusMedia} from '../../utils'

export const landingPage = defineType({
  type: 'document',
  name: 'landingPage',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description:
        "This is just to identify the current document uniquely. This won't be used elsewhere",
    }),
    defineField({
      type: 'boolean',
      name: 'isActive',
      title: 'Is Active?',
      description:
        'Ensure only one document is active. If multiple documents are active, the most recently updated one will be used.',
    }),
    defineField({
      type: 'boolean',
      name: 'isExperimental',
      title: 'Is Experimental?',
      description:
        'Ensure only one document is marked experimental for A/B testing. If multiple documents are experimental, the most recently updated one will be used.',
      validation: (rule) =>
        rule.custom((value, context) => {
          const isActive = context.document?.isActive

          if (value && isActive) {
            return 'A document cannot be both active and experimental.'
          }

          return true
        }),
    }),
    defineField({
      type: 'heroSection',
      name: 'heroSection',
      title: 'Hero Section',
    }),
    defineField({
      type: 'primaryFeaturesSection',
      name: 'primaryFeaturesSection',
      title: 'Primary Features Section',
    }),
    defineField({
      type: 'secondaryFeaturesSection',
      name: 'secondaryFeaturesSection',
      title: 'Secondary Features Section',
    }),
    defineField({
      type: 'ctaSection',
      name: 'ctaSection',
      title: 'Call To Action Section',
    }),
    defineField({
      type: 'resourcesSection',
      name: 'resourcesSection',
      title: 'Resources Section',
    }),
    defineField({
      type: 'pricingSection',
      name: 'pricingSection',
      title: 'Pricing Section',
    }),
    defineField({
      type: 'faqsSection',
      name: 'faqsSection',
      title: 'Faqs Section',
    }),
  ],
  preview: {
    select: {
      name: 'title',
      isActive: 'isActive',
      isExperimental: 'isExperimental',
      updatedAt: '_updatedAt',
      docId: '_id',
    },
    prepare({name, isActive, isExperimental, updatedAt, docId}) {
      const updateDate = new Date(updatedAt).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })

      const isDraft = (docId as string).startsWith('drafts.')

      let statusColor: string
      let statusCode = ''

      if (isActive) {
        statusCode = 'A'
        if (isDraft) {
          statusColor = '#007bff' // Blue - isActive & Draft
          statusCode += ':D'
        } else {
          statusColor = '#28a745' // Green - isActive & Published
          statusCode += ':P'
        }
      } else if (isExperimental) {
        statusCode = 'E'
        if (isDraft) {
          statusColor = '#6f42c1' // Purple - isExperimental & Draft
          statusCode += ':D'
        } else {
          statusColor = '#fd7e14' // Orange - isExperimental & Published
          statusCode += ':P'
        }
      } else {
        if (isDraft) {
          statusColor = '#6c757d' // Gray - Draft
          statusCode += 'D'
        } else {
          statusColor = '#20c997' // Teal - Published
          statusCode += 'P'
        }
      }

      return {
        title: name,
        subtitle: updateDate,
        media: <StatusMedia statusCode={statusCode} statusColor={statusColor} />,
      }
    },
  },
})

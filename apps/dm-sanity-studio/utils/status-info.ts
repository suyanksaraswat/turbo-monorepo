interface StatusInfo {
  statusColor: string
  statusCode: string
}
export function getStatusInfo(docId: string): StatusInfo {
  const isDraft = docId.startsWith('drafts.')

  let statusColor: string
  let statusCode = ''

  if (isDraft) {
    statusColor = '#6c757d' // Gray - Draft
    statusCode += 'D'
  } else {
    statusColor = '#20c997' // Teal - Published
    statusCode += 'P'
  }

  return {
    statusColor,
    statusCode,
  }
}

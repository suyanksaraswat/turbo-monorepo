import React from 'react'

export function StatusMedia({statusColor, statusCode}: {statusColor: string; statusCode: string}) {
  return (
    <span
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: statusColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {statusCode}
    </span>
  )
}

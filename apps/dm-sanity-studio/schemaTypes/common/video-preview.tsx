import type {PreviewProps} from 'sanity'
import {Flex, Text} from '@sanity/ui'
import ReactPlayer from 'react-player/lazy'
import React from 'react'

export function VideoPreview(props: PreviewProps) {
  const {title: url} = props

  return (
    <Flex padding={3} align="center" justify="center">
      {typeof url === 'string' ? <ReactPlayer url={url} /> : <Text>Add a Video URL</Text>}
    </Flex>
  )
}

import React from 'react'

export default function Page({ params }: { params: { id: string }}) {
  const noteId = params.id

  return (
    <div>Note {noteId}</div>
  )
}

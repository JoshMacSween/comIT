import React from 'react'

export default function FileList(Files) {
  const FileList = ({ files }) => (
    <table className='FileList'>
      <tbody>
        {files.map( file => (
          <table className="file-list">
            <tr className="file-list-item" key="file.id">
              <td className="file-name">{file.name}</td>
            </tr>
          </table>
        ))}
      </tbody>
    </table>
  )

  const testFiles = [
    {
      id: 1,
      name: 'src',
      type: 'folder',
      updated_at: '2016-07-11 21:24:00',
      latestCommit: {
        message: 'Initial commit',
      },
    },
    {
      id: 2,
      name: 'tests',
      type: 'folder',
      updated_at: '2016-07-11 21:24:00',
      latestCommit: {
        message: 'Initial commit',
      },
    },
    {
      id: 3,
      name: 'README',
      type: 'file',
      updated_at: '2016-07-18 21:24:00',
      latestCommit: {
        message: 'Added a readme',
      },
    },
  ]

  return (
    <div>
      <h2>{Files.name}</h2>
    </div>
  )
}

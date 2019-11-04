import { h, useState, useEffect } from './react-shim'
import { useStore } from 'use-store'
import { createRestHook } from 'react-data-hooks'

const useFoo = createRestHook('/api/foo')

const App = () => {
  let { data } = useFoo()
  // let [ data, setData ] = useStore('foo', null, { persist: true })

  // useEffect(() => {
  //   fetch('/api/foo')
  //     .then(r => r.json())
  //     .then(setData)
  //     .catch(err => setState(err.message))
  // }, [])

  return (
    <h>
      <h1>Preact + Parcel</h1>
      <pre>
        { JSON.stringify(data, null, 2) }
      </pre>
    </h>
  )
}

export default App
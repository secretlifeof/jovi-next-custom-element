import { useEffect, useRef } from 'react'

import './custom'

export default () => {
  const refContainer = useRef(null)

  useEffect(() => {
    var node = document.createElement('form-test')
    refContainer.current.appendChild(node)
  }, [])

  return <div ref={refContainer}></div>
}

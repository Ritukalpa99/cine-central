import {useEffect} from 'react'

export const useTitle = (title) => {

  useEffect(() => {
    document.title = `${title} / Cine Central`
  })
  return null;
}

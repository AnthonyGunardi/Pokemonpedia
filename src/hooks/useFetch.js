import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (url) {
      setLoading(true)
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setTimeout(() => {
            data.results ? setData(data.results) : setData(data)
            setLoading(false)
          }, 1000);
        })
        .catch(err => {
          setError(err)
        })
    }
  }, [url])

  return {
    data,
    error,
    loading
  }
}

export default useFetch
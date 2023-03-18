import { useEffect, useState } from 'react'


export default function  useFetch(url) {
    const [data, setData] = useState(null)
    const [isPending,  setIsPending] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
          fetch(url)
        .then(response => {
          if(response.ok) return response.json()
          throw Error("Cant connect to server")
        })
        .then(data => {
          setData(data)
          setIsPending(false)
        })
        .catch(err => {
          setIsPending(false)
          console.log(err.message)
        })
        }, 3000)
      }, [url])
      return {data, isPending}
}
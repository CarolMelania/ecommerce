import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
    const [input, setInput] = useState(defaults)
  
  
    useEffect(() => {
      setInput({ ...defaults })
    }, [defaults])
  
    const handleInputChange = (event) => {
      const { name, value } = event.target
      setInput({ ...input, [name]: value })
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      callback(input) 
    }
  
    return {
      input,
      handleInputChange,
      handleSubmit
    }
  }
  
  export default useForm
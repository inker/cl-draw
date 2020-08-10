import { useCallback } from 'react'

import makeReducerHook from 'utils/makeReducerHook'

export default <S>(key: string, initialState: S) => {
  const use = makeReducerHook(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        return JSON.parse(item) as S
      }
    } catch (err) {
      console.error(err)
    }

    try {
      window.localStorage.setItem(key, JSON.stringify(initialState))
    } catch (err) {
      console.error(err)
    }
    return initialState
  })

  return () => {
    const [storedValue, setStoredValue] = use()
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = useCallback((value: React.SetStateAction<S>) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore = value instanceof Function
          ? value(storedValue)
          : value
        // Save state
        setStoredValue(valueToStore)
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      } catch (err) {
        // A more advanced implementation would handle the error case
        console.error(err)
      }
    }, [setStoredValue])

    const reset = useCallback(() => {
      setStoredValue(initialState)
      try {
        window.localStorage.removeItem(key)
      } catch (err) {
        console.error(err)
      }
    }, [setStoredValue])

    return [storedValue, setValue, reset] as const
  }
}
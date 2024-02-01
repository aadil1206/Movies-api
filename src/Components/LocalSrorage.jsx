export const useLocalStorage=(key)=>{
    const setItem=(values)=>{
      window.localStorage.setItem(key,JSON.stringify(values));
    }
    return {setItem}
  }
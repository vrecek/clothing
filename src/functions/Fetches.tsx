type RequestType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

interface MixReturn<T> {
   json: T,
   code: number,
   msg: string
}

interface FetchErrorReturn {
   code: number,
   msg: string
}

export default class Fetches {
   
   public static async mix<T = any>(uri: string, type: RequestType, body?: any): Promise<MixReturn<T>> {
      const res = await fetch(uri, {
         method: type,
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(body)
      })

      let json: T
      let msg: string = res.statusText
      const code: number = res.status

      try { json = await res.json() }
      catch(err) { json = null as any }

      const returnObj = {
         code,
         msg,
         json
      }

      if(!res.ok) throw returnObj

      return returnObj
   }

   public static async multer<T = any>(uri: string, type: RequestType, formDataBody: FormData): Promise<MixReturn<T>> {
      const res = await fetch(uri, {
         method: type,
         body: formDataBody
      })

      let json: T
      let msg: string = res.statusText

      try { json = await res.json() }
      catch(err) { json = null as any }

      const returnObj = {
         code: res.status,
         msg,
         json
      }

      if(!res.ok) throw returnObj

      return returnObj
   }

   public static returnFetchErrorState(err: any): FetchErrorReturn {
      return { 
         code: err?.code ?? 500, 
         msg: err.json?.msg ?? 'Error message was not set' 
     }
   }

   public static disableButton(item: HTMLElement) {
      item.style.pointerEvents = 'none'
   }

   public static enableButton(item: HTMLElement) {
      item.style.pointerEvents = 'all'
   }
} 
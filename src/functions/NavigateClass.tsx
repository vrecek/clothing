import { NavigateFunction } from "react-router-dom";

export type EventType = KeyboardEvent | React.KeyboardEvent
export type IVoidCB = () => void

export interface IInputInfo {
   key: string,
   input: HTMLInputElement,
   value: string
}

export default class NavigateClass {
   private static getInputInfo(event: EventType): IInputInfo {
      const { key } = event
      const target = event.target as HTMLInputElement

      return {
         key,
         input: target,
         value: target?.value ?? ''
      }
   }

   public static searchNavigateEnter(ev: EventType, navigate: NavigateFunction, url: string, cb?: IVoidCB): void {
      const { key, value } = NavigateClass.getInputInfo(ev)

      if(key === 'Enter' && value) {
         if(cb) cb()
         
         url = url.replace('[value]', value)

         navigate(url)
      }   
   }

   public static searchNavigateCorrect(ev: KeyboardEvent | React.KeyboardEvent, correctPass: string, cb: IVoidCB): void {
      const { key, value } = this.getInputInfo(ev)

      if(key === 'Enter' && value === correctPass) {
         cb()
      }   
   }

}
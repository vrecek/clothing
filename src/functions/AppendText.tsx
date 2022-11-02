type ElementsType = 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1'

class AppendResult {
   private message: string | null
   private cname: string | null

   private element: ElementsType

   private isElementAppended: boolean

   private appendedElement: Element | null
   private timeout: NodeJS.Timer | null

   public constructor(headerType: ElementsType, cname?: string) {
      this.message = null
      this.cname = cname ?? null
      this.element = headerType

      this.isElementAppended = false

      this.timeout = null
      this.appendedElement = null
   }

   
   private nullProperties(): void {
      this.appendedElement = null
      this.timeout = null
      this.isElementAppended = false
   }


   public appendTo(appendTo: HTMLElement, removeAfterSeconds?: number): void {
      if(this.isElementAppended) return

      const elem = document.createElement( this.element )
      elem.className = this.cname ?? ''
      elem.textContent = this.message ?? 'No message set'

      appendTo.appendChild( elem )

      this.isElementAppended = true
      this.appendedElement = elem

      if(!removeAfterSeconds) return

      this.timeout = setTimeout( () => {
         elem.remove()
         this.nullProperties()
      }, removeAfterSeconds * 1000 )
   }


   public removeAppended(): void {
      if(!this.appendedElement) return
      if(this.timeout) clearTimeout(this.timeout)
      
      this.appendedElement.remove()
      this.nullProperties()
   }


   public get isAppended(): boolean {
      return this.isElementAppended
   }

   public get hasMessageSet(): boolean {
      return !!this.message
   }


   public set setMessage(msg: string | null) {
      this.message = msg
   }

   public set setClass(cname: string | null) {
      this.cname = cname
   }
}

export default AppendResult
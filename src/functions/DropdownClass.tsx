type DisplayType = 'block' | 'flex'

export default class DropDown {
   private active: boolean
   private activeList: HTMLElement | null

   private filterExpand(x: string): boolean {
      if(/[0-9.]/ig.test(x)) return true

      return false
   }

   private returnHeight(list: HTMLElement, display?: DisplayType): number {
      list.style.height = 'auto'
      list.style.display = display ?? 'block'
      
      return parseFloat(
                           window.getComputedStyle(list, null).getPropertyValue('height')
                           .split('')
                           .filter(x => this.filterExpand(x) )
                           .join('')
                        )
   }


   public constructor() {
      this.active = false
      this.activeList = null
   }

   // overflow: hidden
   // height: 0
   // display: none
   // IF FIRST

   public expandMenu(yourTransitionSecs: number, hiddenList: HTMLElement, display?: DisplayType): void {
      if(!this.active) return
      
      const height: number = this.returnHeight(hiddenList, display)

      hiddenList.style.height = '0'
         
      setTimeout(() => {
         this.activeList = hiddenList

         hiddenList.style.height = `${ height }px`

         setTimeout(() => hiddenList.style.overflow = 'visible', yourTransitionSecs * 1000)
      }, 5);
   }


   public shrinkMenu(yourTransitionSecs: number, hiddenList?: HTMLElement, display?: DisplayType): void {
      if(!this.activeList && hiddenList) {
         const height: number = this.returnHeight(hiddenList, display)

         hiddenList.style.height = `${ height }px`
         hiddenList.style.overflow = 'hidden'

         setTimeout(() => {
            hiddenList.style.height = `0px`

            setTimeout(() => {
               hiddenList.style.display = 'none'
            }, yourTransitionSecs * 1000);
         }, 5);

         return
      }

      if(this.active || !this.activeList) return

      const item = this.activeList

      item.style.overflow = 'hidden'
      item.style.height = '0px'
      this.activeList = null

      setTimeout(() => {
         item.style.display = 'none'
      }, yourTransitionSecs * 1000);
   }  


   public rotateArrow(arrow: HTMLElement): void {
      if(this.active) {
         arrow.style.transform = 'rotate(180deg)'
         return
      }

      arrow.style.transform = 'rotate(0)'
   }


   public switchActive(): void { 
      this.active = !this.active 
   }


   public get getActive(): boolean { 
      return this.active 
   }
}
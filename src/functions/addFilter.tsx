import { IFilterList } from "../interfaces/SearchpageInterfaces"

interface IParaFilter {
   currentPara: HTMLElement,
   defaultVal: string
}

interface FilterDropdown extends IParaFilter {
   listObj: IFilterList,
}

interface FilterRequired {
   activeCont: HTMLElement, 
   id: string,
   filterText: string
}

const addFilter = (required: FilterRequired, ddFilter?: FilterDropdown, priceFilter?: IParaFilter): void => {
   const {id, activeCont, filterText} = required

   const activeFilters: Element[] = Array.from(activeCont.children)
   const activeId: number = activeFilters.findIndex(x => x.classList.contains(id))

   if(activeId >= 0) {
      activeFilters[activeId].remove()
   }

   let container: HTMLElement | null = null

   if(ddFilter) {
      const {currentPara, listObj, defaultVal} = ddFilter

      container = createElements(filterText, id, currentPara, defaultVal)
   }
   else if(priceFilter) {
      const {currentPara, defaultVal} = priceFilter

      container = createElements(filterText, id, currentPara, defaultVal)
   }

   if(!container) return

   activeCont.appendChild(container)
}

const createElements = (text: string, id: string, para?: HTMLElement, defaultVal?: string): HTMLDivElement => {
   const container = document.createElement('div')
   const p = document.createElement('p')
   const div2 = document.createElement('div');
   const span1 = document.createElement('span')
   const span2 = document.createElement('span')

   div2.appendChild(span1)
   div2.appendChild(span2)

   p.textContent = text

   container.className = `container ${id}`
   container.appendChild(p)
   container.appendChild(div2)

   div2.addEventListener('click', () => {
      container.remove()

      if(para && defaultVal) para.textContent = defaultVal
   })

   return container
}

export default addFilter
import { create } from 'zustand'

export type configType = {
    numberOfQuestion:number,
    category:{name:string},
    level:string,
    type:string,
    status:string,
    score:number,
    config?:any
}

const defaultConfig = {
    numberOfQuestion:10,
    category:{name:''},
    level:"",
    type:"",
    status:'',
    score:0
}

export const useQuizConfig = create((set) => ({
  config : {...defaultConfig},
  addLevel: (level:string) => set((state:configType) => ({config:{...state.config,level:level}})),
  addCategory: (name:string) => set((state:configType) => ({config:{...state.config,category:{name:name}}})),
  addType: (type:string) => set((state:configType) => ({config:{...state.config,type:type}})),
  addQuestionNumber: (numberOfQuestion:string) => set((state:configType) => ({config:{...state.config,numberOfQuestion:numberOfQuestion}})),
  changeStatus: (status:string) => set((state:configType) => ({config:{...state.config,status:status}})),
  setScore: () => set((state:configType) => ({config:{...state.config,score:state.config.score+1}})),


  removeConfig: () => set({ config:defaultConfig }),
}))


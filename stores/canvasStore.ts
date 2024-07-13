import { create } from "zustand";

interface CanvasState{
    strokeColor:string
    strokeWidth:number[]
    dashgap:number[]
    setstrokeColor: (strokeColor:string) => void
    setStrokeWidth: (strokeWidth:number[]) => void
    setDashGap:(dashgap:number[]) => void
}

export const useCanvasStore = create<CanvasState>((set) => ({
    strokeColor:'#000',
    strokeWidth:[3],
    dashgap:[0],
    setstrokeColor: strokeColor => set({strokeColor}),
    setStrokeWidth: strokeWidth => set({strokeWidth}),
    setDashGap: dashgap => set({dashgap}),

}))
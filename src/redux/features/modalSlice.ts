/**
 * Imports
 */
// Redux
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Types
import type { ProjectType } from "@/types/ProjectType";

// Constants
import { PROJECTS } from '@/constants/Projects'

// Type
type initialStateType = {
  isModalActive: boolean,
  currentProject: ProjectType | null
}

/**
 * Inital State
 */
const initialState: initialStateType = {
  isModalActive: false,
  currentProject: null
}

/**
 * Slice
 */
const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, projectId: PayloadAction<string>) => {
      const targetProject = PROJECTS.find(({ id }: ProjectType) => id === projectId.payload)

      if (targetProject) {
        state.currentProject = targetProject
        document.body.style.overflow = 'hidden'
        state.isModalActive = true
      }
    },
    closeModal: (state) => {
      document.body.style.overflow = 'auto'
      state.isModalActive = false
    }
  }
})

export const { openModal, closeModal } = modal.actions
export default modal.reducer
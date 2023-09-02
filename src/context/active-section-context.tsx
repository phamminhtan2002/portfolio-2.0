import React from 'react'
import { SectionName } from '../constants/types'

type Props = { children: React.ReactNode }

type ActiveSectionContextType = {
  activeSection: SectionName | ''
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName | ''>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

const ActiveSectionContext =
  React.createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({ children }: Props) {
  const [activeSection, setActiveSection] = React.useState<SectionName | ''>('')
  const [timeOfLastClick, setTimeOfLastClick] = React.useState(0) // We need to keep track of this to disable the observer temporarily when user clicks on a link
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = React.useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    )
  }

  return context
}

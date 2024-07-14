import React from 'react'

const useThemeDetector = (): { theme: 'dark' | 'light' } => {
   const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches
   const [isDarkTheme, setIsDarkTheme] = React.useState(getCurrentTheme())
   const mqListener = (e: MediaQueryListEvent) => {
      setIsDarkTheme(e.matches)
   }

   React.useEffect(() => {
      const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
      darkThemeMq.addListener(mqListener)
      return () => darkThemeMq.removeListener(mqListener)
   }, [])
   return {
      theme: isDarkTheme ? 'dark' : 'light'
   }
}

export { useThemeDetector }

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BaseThemeProvider } from '@thng/react'
import { RouterProvider } from 'react-router-dom'
import { router } from 'Routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BaseThemeProvider>
			<RouterProvider router={router} />
		</BaseThemeProvider>
	</React.StrictMode>
)

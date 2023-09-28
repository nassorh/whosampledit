import './App.scss';
import Index from './Pages/Index'

import Search from './Pages/Search';
import Sample from './Pages/Sample';

import { RouterProvider,createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '',
		element: <Index />,
		children: [
			{path: '', element: <Search />},
      		{path: 'sample/:songId', element: <Sample />}
		]
	}
])

function App() {
  return <RouterProvider router={router} />
}

export default App;

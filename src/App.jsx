import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import About from './pages/About'
import Contact from './pages/Contact'
import DefaultLayout from './pages/DefaultLayout'
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<DefaultLayout />}>
						<Route path='/' element={<Home />} />
						<Route path='/books' element={<Books />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App

import MainMenu from './MainMenu'
export default function AppHeader() {
	return (
		<header>
			<div className='logo'>
				<img src='/vite.svg' alt='logo' />
			</div>
			<MainMenu />
		</header>
	)
}

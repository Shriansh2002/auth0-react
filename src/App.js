import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

function App() {
	const { user, isLoading } = useAuth0();

	if (isLoading) return <div>Loading ...</div>;
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>
				Login and Logout using Auth0
			</h1>

			{user ? (
				<>
					<Profile />
					<LogoutButton />
				</>
			) : (
				<LoginButton />
			)}
		</div>
	);
}

export default App;

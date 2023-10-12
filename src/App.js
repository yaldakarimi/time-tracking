import { Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";
import HomePage from "views/HomePage/HomePage";
import DetailsPage from "views/DetailsPage/DetailsPage";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/events/:id" element={<DetailsPage />} />
				</Routes>
			</div>
			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</QueryClientProvider>
	);
}

export default App;

interface IProps {
	customerCount: number;
}

export const NewsletterPage = (props: IProps) => {
	return (
		<html lang="pl">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Newsletter</title>
				<link
					href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
					crossorigin="anonymous"
				/>
				<script
					src="https://unpkg.com/htmx.org@1.9.5"
					crossorigin="anonymous"
				/>
				<script src="https://unpkg.com/htmx.org/dist/ext/json-enc.js" />
			</head>
			<body class="bg-gray-900 text-white min-h-screen flex items-center justify-center">
				<div class="bg-gray-800 p-6 rounded-lg shadow-lg">
					<div class="absolute top-0 right-0 mt-2 mr-2">
						<i class="fas fa-envelope text-2xl">
							<div class="absolute top-0 -right-1 h-2 w-2 bg-red-500 rounded-xl" />
						</i>
					</div>
					<h1 class="text-2xl font-semibold mb-4">
						Sign up for the newsletter
					</h1>
					<form
						hx-post="/newsletter/signup"
						hx-ext="json-enc"
						hx-target="#result"
					>
						<label for="email" class="font-semibold">
							Email address
						</label>
						<input
							type="text"
							id="email"
							name="email"
							required
							class="block w-full py-2 px-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500"
						/>
						<button
							type="submit"
							class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded-md transition duration-300 ease-in-out"
						>
							Submit<span class="htmx-indicator"> ...</span>
						</button>
					</form>
					<p class="text-lg mt-4">
						<span id="result">
							You are our {props.customerCount} customer btw
						</span>{" "}
						😊
					</p>
				</div>
			</body>
		</html>
	);
};

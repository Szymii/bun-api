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
        <script
          src="https://unpkg.com/htmx.org@1.9.5"
          integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO"
          crossorigin="anonymous"
        ></script>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body class="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 class="text-2xl font-semibold mb-4">
            Sign up for the newsletter
          </h1>
          <form hx-post="/demo/newsletter" hx-target="#result">
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

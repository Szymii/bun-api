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
      </head>
      <body>
        <div>
          <h1>Sign up for the newsletter</h1>
          <form>
            <label for="email">Email address</label>
            <input type="email" id="email" name="email" required />
            <button type="submit">Submit</button>
          </form>
          <p>You are our {props.customerCount} customer btw 😊</p>
        </div>
      </body>
    </html>
  );
};

import { Context } from "hono";

export const notFound = (c: Context) => {
  return c.text("Custom 404 Message", 404);
};

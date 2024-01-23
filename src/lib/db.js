const { user, password } = process.env;

export const ConnectionStr =
  "mongodb+srv://"+user+":" +
  password +
  "@cluster0.vtcaef8.mongodb.net/ProductDB?retryWrites=true&w=majority";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middlewares portion
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// this is for form data
app.use(
  express.json({
    limit: "16kb",
  })
);
// if data coming from url
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // we can tak objects inside objects by extended
// to share static resources inside public folder
app.use(express.static("public"));
// to perform cookie crud operation from server to user browser
app.use(cookieParser());
export { app };

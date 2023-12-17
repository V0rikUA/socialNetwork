import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer'; 
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

/* COnfigutration */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"})); //Configures helmet's CORS policy to allow all origins.
app.use(morgan("common")); // Enable logging of HTTP requests in the "common" format (e.g., IP address, method, URL, status code).
app.use(bodyParser.json({limit: "30mb", extended : true})); //limit payloud to 30 mb. and enabling parsing of nested objects.
app.use(bodyParser.urlencoded({limit: "30mb", extended : true}))
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")))


/* FILE STORAGE */

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, "public.assets");
  },
  filename : function(req, file, cb){
    cb(null, file.originalname);
  }
})

const upload = multer({storage});

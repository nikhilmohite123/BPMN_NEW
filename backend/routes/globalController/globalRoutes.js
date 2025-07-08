import express from 'express'
import { speakup } from './globalCtrl.js';

const globalRoute = express.Router();

//speakup
globalRoute.post('/speakup', speakup)

export default globalRoute;
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './routers/index.js';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cookieParser from 'cookie-parser';
import sequelize from './db.js';
import {User, UserData, TokenModel} from './models/models.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import errorMiddleware from './middleware/error-middleware.js';

const app = express();

const PORT = process.env.PORT || 3002


//use cors to allow cross origin resource sharing
app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router);

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log('server started on localhost:' + `${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

const data = {
    "id": 1,
    "login": 1,
    "userName": "Victoria Porter",
    "photo": "https://randomuser.me/api/portraits/women/57.jpg",
    "location": "Toronto, Canada",
    "dateOfBirth": "24.11.1999",
    "maritalStatus": "single",
    "interests": [
        "photo",
        "travel",
        "flowers",
        "cooking",
        "yoga",
        "footbal",
        "cats",
        "French language"
    ],
    "education": "University of Toronto",
    "religion": "catholic",
    "work": "Fahrenheit Coffee",
    "position": "barista",
    "animals": "cat",
    "family": [
        "mother",
        "father",
        "sister",
        "brother"
    ],
    "status": "set status"
}

const allNews = [
    {
    "name": "Oleg Protas",
    "location": "Vancouver, Canada",
    "photo": "https://randomuser.me/api/portraits/men/2.jpg",
    "date": "22 March 2020",
    "title": "Посетил дельфинарий",
    "topic": "дельфины, природа, отдых",
    "text": "Посетил городской дельфинарий. Было очень интересно и позновательно. Посмотрел шоу-программу - это очень красиво"
    },
    {
    "name": "Jane Done",
    "location": "Seatle, USA",
    "photo": "https://randomuser.me/api/portraits/women/35.jpg",
    "date": "14 February 2020",
    "title": "Начала заниматься йогой",
    "topic": "здоровье, спорт, отдых",
    "text": "Начала заниматься йогой. Это просто великолепно. Занимаюсь с инструктором и мне очень нравиться. Стало легче на душе и в теле. А самое главное я теперь люблю просыпаться по утрам и делать зарядку. Это очень помогает продуктивно провести свой день. Всем очень советую."
    },
    {
    "name": "James Bond",
    "location": "Westminster, Great BRitain",
    "photo": "https://randomuser.me/api/portraits/men/99.jpg",
    "date": "23 January 2020",
    "title": "Встретился с королевой по вопросом безопасности страны",
    "topic": "работа, 007, астон мартин",
    "text": "Встретился с ее величеством Королевой Англии - Елизаветой. Обсудили вчерашний матч Арсенала против Челси. Слегка обсудили вопросы безопасности в стране. Устроили легкое чаепитие.... на этот раз без виски."
    },
    {
    "name": "Oleg Protas",
    "location": "Vancouver, Canada",
    "photo": "https://randomuser.me/api/portraits/men/2.jpg",
    "date": "22 March 2020",
    "title": "Посетил дельфинарий",
    "topic": "дельфины, природа, отдых",
    "text": "Посетил городской дельфинарий. Было очень интересно и позновательно. Посмотрел шоу-программу - это очень красиво"
    },
    {
    "name": "Jane Done",
    "location": "Seatle, USA",
    "photo": "https://randomuser.me/api/portraits/women/35.jpg",
    "date": "14 February 2020",
    "title": "Начала заниматься йогой",
    "topic": "здоровье, спорт, отдых",
    "text": "Начала заниматься йогой. Это просто великолепно. Занимаюсь с инструктором и мне очень нравиться. Стало легче на душе и в теле. А самое главное я теперь люблю просыпаться по утрам и делать зарядку. Это очень помогает продуктивно провести свой день. Всем очень советую."
    }
]

app.use(express.urlencoded({ extended: false }));

app.get('/news', (req, res) => {
    res.json(allNews)
});

app.get('/userdata', (req, res) => {
    res.json(data)
});

app.post('/news', function(req, res) {
    console.log(req.body);
  const news = {
    title: req.body.title,
    topic: req.body.topic,
    text: req.body.text,
    photo: req.body.photo,
    name: req.body.name,
    location: req.body.location,
    date: req.body.date,
  };

  allNews.push(news);
});

app.use(errorMiddleware);

start();


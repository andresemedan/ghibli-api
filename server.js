const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(cors());

const ghibliFilms = {
    'princess mononoke': {
        'director': 'Hayao Miyazaki',
        'year': 1997,
        'music': 'Joe Hisaishi'
    },
    'only yesterday': {
        'director': 'Isao Takahata',
        'year': 1991,
        'music': 'Masaru Hoshi'
    },
    'arrietty': {
        'director': 'Hiromasa Yonebayashi',
        'year': 2010,
        'music': 'Cécile Corbel'
    },
    'ghibli': {
        'director': 'Dylan',
        'year': 'Dylan',
        'music': 'Dylan'
    }
};

app.get('/', (request, response) =>  {
    response.sendFile(__dirname + '/index.html')
});

app.get('/api/:filmsName', (request,response)=>{
    const filmName = request.params.filmsName.toLowerCase();
    if(ghibliFilms[filmName]){
        response.json(ghibliFilms[filmName])
    }else {
        response.json(ghibliFilms['ghibli'])
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
});

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(cors());

const ghibliFilms = {
    'nausicaa of the valley of the wind': {
        'director': 'Hayao Miyazaki',
        'year': 1984,
        'music': 'Joe Hisaishi'
    },
    'castle in the sky': {
        'director': 'Hayao Miyazaki',
        'year': 1986,
        'music': 'Joe Hisaishi'
    },
    'grave of the fireflies': {
        'director': 'Isao Takahata',
        'year': 1988,
        'music': 'Michio Mamiya'
    },
    'my neighbor totoro': {
        'director': 'Hayao Miyazaki',
        'year': 1988,
        'music': 'Joe Hisaishi'
    },
    'kiki\'s delivery service': {
        'director': 'Hayao Miyazaki',
        'year': 1989,
        'music': 'Joe Hisaishi'
    },
    'only yesterday': {
        'director': 'Isao Takahata',
        'year': 1991,
        'music': 'Masaru Hoshi'
    },
    'porco rosso': {
        'director': 'Hayao Miyazaki',
        'year': 1992,
        'music': 'Joe Hisaishi'
    },
    'ocean waves': {
        'director': 'Itomomi Mochizuki \n Kaori Nakamura (Keiko Niwa)',
        'year': 1993,
        'music': 'Shigeru Nagata',
        'image': 'https://www.ghibli.jp/works/umi/#frame&gid=1&pid=24'
    },
    'pom poko': {
        'director': 'Isao Takahata',
        'year': 1994,
        'music': 'Shang Shang Typhoon'
    },
    'whisper of the heart': {
        'director': 'Yoshifumi Kondō \n Hayao Miyazaki',
        'year': 1995,
        'music': 'Yuji Nomi'
    },
    'my neighbors the yamadas': {
        'director': 'Isao Takahata',
        'year': 1999,
        'music': 'Akiko Yano'
    },
    'spirited away': {
        'director': 'Hayao Miyazaki',
        'year': 2001,
        'music': 'Joe Hisaishi'
    },
    'the cat returns': {
        'director': 'Hiroyuki Morita \n Reiko Yoshida',
        'year': 2002,
        'music': 'Yuji Nomi'
    },
    'howls moving castle': {
        'director': 'Hayao Miyazaki',
        'year': 2004,
        'music': 'Joe Hisaishi'
    },
    'tales from earthsea': {
        'director': 'Goro Miyazaki',
        'year': 2006,
        'music': 'Tamiya Terashima'
    },
    'ponyo': {
        'director': 'Hayao Miyazaki',
        'year': 2008,
        'music': 'Joe Hisaishi'
    },
    'arrietty': {
        'director': 'Hiromasa Yonebayashi',
        'year': 2010,
        'music': 'Cécile Corbel'
    },
    'from up on poppy hill': {
        'director': 'Goro Miyazaki',
        'year': 2011,
        'music': 'Satoshi Takebe'
    },
    'the wind rises': {
        'director': 'Hayao Miyazaki',
        'year': 2013,
        'music': 'Joe Hisaishi'
    },
    'the tale of princess kaguya': {
        'director': 'Isao Takahata',
        'year': 2013,
        'music': 'Joe Hisaishi'
    },
    'when marnie was there': {
        'director': 'Hiromasa Yonebayashi',
        'year': 2014,
        'music': 'Takatsugu Muramatsu'
    },
    'earwig and the witch': {
        'director': 'Goro Miyazaki',
        'year': 2020,
        'music': 'Satoshi Takebe'
    },
    'ghibli': {
        'director': 'Type in a Studio Ghibli movie to find out more!'
    }
};

app.get('/', (request, response) =>  {
    response.sendFile(__dirname + '/index.html')
});

app.get('/api', (request, response) => {
    response.json(ghibliFilms)
})

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

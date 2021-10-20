let userData = {
    userName: 'Olga Ivanova',
    location: 'Toronto, Canada',
    dateOfBirth: '24.11.1999',
    maritalStatus: 'single',
    interests: ['photo', 'travel', 'flowers', 'cooking', 'yoga', 'footbal', 'cats', 'French language'],
    education: 'University of Toronto',
    religion: 'catholic',
    work: 'Fahrenheit Coffee',
    position: 'barista',
    animals: 'cat',
    family: ['mother', 'father', 'sister', 'brother'],
}

export let friends = [
    {
        "name": "Alyssa Robert",
        "photo": "https://randomuser.me/api/portraits/med/women/13.jpg",
        "uid":"0dd581a8-cf99-4dd5-8391-243a20f638f1",
    },
    {
        "name": "Russell Myers",
        "photo": "https://randomuser.me/api/portraits/med/men/19.jpg",
        "uid":"dad14ffb-9704-410f-adae-ba63c79a52dd",
    },
    {
        "name": "Aleksi Kinnunen",
        "photo": "https://randomuser.me/api/portraits/med/men/68.jpg",
        "uid": "154ce8ba-0aeb-425c-a9a8-3afa7b28677f",
    },
    {
        "name": "Said Knudsen",
        "photo": "https://randomuser.me/api/portraits/med/men/32.jpg",
        "uid":"c67e7016-e1d7-4635-9533-d4f521a35cc9",
    },
    {
        "name": "Ella Mortensen",
        "photo": "https://randomuser.me/api/portraits/med/women/50.jpg",
        "uid":"384db99b-106d-4b96-95ad-61a3894058c0",
    },
    {
        "name": "Letitia Stephens",
        "photo": "https://randomuser.me/api/portraits/med/women/12.jpg",
        "uid":"9dc9f028-dd6f-413f-b984-fd6510f25c22",
    },
]

export let gallery = [
    {
        "description": "Lady with a Teddy",
        "imageUrl": "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg"
    },
    {
        "description": "Girl with camera",
        "imageUrl": "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg"
    },
    {
        "description": "Beautiful Girl with Glasses",
        "imageUrl": "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg"
    },
    {
        "description": "Redhead with frackles",
        "imageUrl": "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg"
    },
    {
        "description": "Girl in black dress",
        "imageUrl": "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg"
    },
    {
        "description": "Girl Sitting on Chair",
        "imageUrl": "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg"
    }
]

export let news = [

]

export let addNews = (newsItem) => {
    news.push(newsItem)
    console.log(news);
}

export default userData;
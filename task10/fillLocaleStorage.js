if (localStorage.length === 0) {
    let posts = [
        {
            id: '1',
            description: 'Пост 1',
            createdAt: new Date('2019-02-17T23:00:00'),
            author: 'Mohamed',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '2',
            description: 'Пост 2',
            createdAt: new Date('2020-03-10T23:00:00'),
            author: 'Mohamed',
            photoLink: 'https://a.d-cd.net/6f4c8g4k245-960.jpg'
        },

        {
            id: '3',
            description: 'Пост 3',
            createdAt: new Date('2020-03-11T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'images/goldenCup.jpg'
        },

        {
            id: '4',
            description: 'Пост 4',
            createdAt: new Date('2020-03-12T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '5',
            description: 'Пост 5',
            createdAt: new Date('2020-03-13T23:00:00'),
            author: 'Mohamed',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '6',
            description: 'Пост 6',
            createdAt: new Date('2020-03-14T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '7',
            description: 'Пост 7',
            createdAt: new Date('2020-03-15T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '8',
            description: 'Пост 8',
            createdAt: new Date('2020-03-16T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '9',
            description: 'Пост 9',
            createdAt: new Date('2020-03-17T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '10',
            description: 'Пост 10',
            createdAt: new Date('2020-03-18T23:00:00'),
            author: 'Mohamed',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '11',
            description: 'Пост 11',
            createdAt: new Date('2020-03-19T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '12',
            description: 'Пост 12',
            createdAt: new Date('2020-03-20T23:00:00'),
            author: 'Mohamed',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '13',
            description: 'Пост 13',
            createdAt: new Date('2020-03-21T23:00:00'),
            author: 'Петр',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '14',
            description: 'Пост 14',
            createdAt: new Date('2020-03-22T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '15',
            description: 'Пост 15',
            createdAt: new Date('2020-03-23T23:00:00'),
            author: 'Петр',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '16',
            description: 'Пост 16',
            createdAt: new Date('2020-03-24T23:00:00'),
            author: 'Mohamed',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '17',
            description: 'Пост 17',
            createdAt: new Date('2020-03-25T23:00:00'),
            author: 'Петр',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '18',
            description: 'Пост 18',
            createdAt: new Date('2020-03-26T23:00:00'),
            author: 'Петр',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '19',
            description: 'Пост 19',
            createdAt: new Date('2020-03-27T23:00:00'),
            author: 'Mohamed',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '20',
            description: 'Пост 20',
            createdAt: new Date('2020-03-28T23:00:00'),
            author: 'Петр',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },
        {
            id: '21',
            description: 'Пост 21',
            createdAt: new Date('2020-03-29T23:00:00'),
            author: 'Петр',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },
        {
            id: '22',
            description: 'Пост 22',
            createdAt: new Date('2020-03-30T23:00:00'),
            author: 'Mohamed',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },
        {
            id: '23',
            description: 'Пост 23',
            createdAt: new Date('2020-04-01T23:00:00'),
            author: 'Mohamed',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },
        {
            id: '24',
            description: 'Пост 24',
            createdAt: new Date('2020-04-02T23:00:00'),
            author: 'Mohamed',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },
        {
            id: '25',
            description: 'Пост 25',
            createdAt: new Date('2020-04-03T23:00:00'),
            author: 'Mohamed',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },
    ];
    localStorage.setItem("posts", JSON.stringify(posts));
}
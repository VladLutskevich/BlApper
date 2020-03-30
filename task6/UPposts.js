(function () {


    var posts = [
        {
            id: '1',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '2',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-10T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '3',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-11T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '4',
            description: '44444Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-12T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '5',
            description: '55555Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-13T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '6',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-14T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '7',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-15T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '8',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-16T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '9',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-17T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '10',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-18T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '11',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-19T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '12',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-20T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '13',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-21T23:00:00'),
            author: 'Петр',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '14',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-22T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '15',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-23T23:00:00'),
            author: 'Петр',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '16',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-24T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '17',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-25T23:00:00'),
            author: 'Петр',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '18',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-26T23:00:00'),
            author: 'Петр',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '19',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-27T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '20',
            description: '[ss]',
            createdAt: new Date('2020-03-28T23:00:00'),
            author: 'Петр',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

    ];


    function getPost(id) {
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].id === id) {
                return i;
            }
        }
    }

    function validatePost(post) {
        if (typeof (post.id) !== 'string' || post.id === '' || typeof (post.description) !== 'string' || post.description.length > 200
            || !(post.createdAt instanceof Date) || typeof (post.author) !== 'string' || post.author === '' || (typeof (post.photoLink) !== 'undefined' && typeof (post.photoLink) !== 'string')) {
            return false;
        }
        return true;
    }

    function addPost(post) {
        if (validatePost(post)) {
            posts.push(post);
            return true;
        }
        return false;
    }

    function editPost(id, post) {
        var ind = getPost(id);
        var tmpPost = Object.assign({}, posts[ind]);
        tmpPost.description = post.description;
        tmpPost.photoLink = post.photoLink;
        if (validatePost(tmpPost)) {
            posts[ind] = tmpPost;
            return true;
        }
        return false;

    }

    function removePost(id) {
        var ind = getPost(id);
        posts.splice(ind, 1);
    }

    function getPosts(skip = 0, top = 10, filterConfig) {
        var arr = [];
        if (typeof (filterConfig) !== 'undefined') {
            var toDate = filterConfig.to;
            var fromDate = filterConfig.from;
            var author = filterConfig.author;
        }
        var skipCount = 0;
        var topCount = 0;
        if (typeof (toDate) === 'undefined') {
            toDate = posts[countPosts - 1].createdAt;
        }
        if (typeof (fromDate) === 'undefined') {
            fromDate = posts[0].createdAt;
        }


        if (typeof (author) === 'string' && author !== '') {
            for (var i = posts.length - 1; i >= 0; i--) {
                if (skipCount >= skip && topCount < top && fromDate <= posts[i].createdAt && toDate >= posts[i].createdAt && author === posts[i].author) {
                    arr.push(posts[i]);
                    topCount++;
                }
                if (topCount >= top) {
                    break;
                }
                skipCount++;
            }
        } else if (typeof (author) !== 'string' || author === '') {
            for (var i = posts.length - 1; i >= 0; i--) {
                if (skipCount >= skip && topCount < top && fromDate <= posts[i].createdAt && toDate >= posts[i].createdAt) {
                    arr.push(posts[i]);
                    topCount++;
                }
                if (topCount >= top) {
                    break;
                }
                skipCount++;
            }
        }

        return arr;

    }

}());
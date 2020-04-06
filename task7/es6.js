(function () {
        class PostCollection {

            constructor(_posts) {
                this._posts = _posts;
            }

            clear() {
                this._posts.splice(0);
            }

            getInd(id) {
                for (var i = 0; i < this._posts.length; i++) {
                    if (this._posts[i].id === id) {
                        return i;
                    }
                }
            }

            get(id) {
                for (var i = 0; i < this._posts.length; i++) {
                    if (this._posts[i].id === id) {
                        return this._posts[i];
                    }
                }
            }

            _validate(post) {
                if (typeof (post.id) !== 'string' || post.id === '' || typeof (post.description) !== 'string' || post.description.length > 200
                    || !(post.createdAt instanceof Date) || typeof (post.author) !== 'string' || post.author === '' || typeof (post.photoLink) !== 'string') {
                    return false;
                }
                return true;
            }

            add(post) {
                if (this._validate(post)) {
                    this._posts.push(post);
                    return true;
                }
                return false;
            }

            edit(id, post) {
                var ind = this.getInd(id);
                var tmpPost = Object.assign({}, this._posts[ind]);
                if (typeof post.description !== 'undefined') {
                    tmpPost.description = post.description;
                }
                if (typeof post.photoLink !== 'undefined') {
                    tmpPost.photoLink = post.photoLink;
                }
                if (this._validate(tmpPost)) {
                    this._posts[ind] = tmpPost;
                    return true;
                }
                return false;

            }


            remove(id) {
                var ind = this.getInd(id);
                this._posts.splice(ind, 1);
            }


            getPage(skip = 0, top = 10, filterConfig) {
                var arr = [];
                if (typeof (filterConfig) !== 'undefined') {
                    var toDate = filterConfig.to;
                    var fromDate = filterConfig.from;
                    var author = filterConfig.author;
                }
                var skipCount = 0;
                var topCount = 0;
                if (typeof (toDate) === 'undefined') {
                    toDate = this._posts[this._posts.length - 1].createdAt;
                }
                if (typeof (fromDate) === 'undefined') {
                    fromDate = this._posts[0].createdAt;
                }


                if (typeof (author) === 'string' && author !== '') {
                    for (var i = this._posts.length - 1; i >= 0; i--) {
                        if (skipCount >= skip && topCount < top && fromDate <= this._posts[i].createdAt && toDate >= this._posts[i].createdAt && author === this._posts[i].author) {
                            arr.push(this._posts[i]);
                            topCount++;
                        }
                        if (topCount >= top) {
                            break;
                        }
                        skipCount++;
                    }
                } else if (typeof (author) !== 'string' || author === '') {
                    for (var i = this._posts.length - 1; i >= 0; i--) {
                        if (skipCount >= skip && topCount < top && fromDate <= this._posts[i].createdAt && toDate >= this._posts[i].createdAt) {
                            arr.push(this._posts[i]);
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

            addAll(posts) {
                var arr = [];
                for (let i = 0; i < posts.length; i++) {
                    if (this._validate(posts[i])) {
                        this._posts.push(posts[i]);
                    } else {
                        arr.push(posts[i]);
                    }
                }
                return arr;
            }


        }


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

        var postsClass = new PostCollection(posts);

        console.log(postsClass.get('2').id);

        console.log(postsClass.add({
            id: '21',
            description: 'test',
            createdAt: new Date('2020-03-28T23:00:00'),
            author: 'Петр',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        }));
        console.log(postsClass.get('21').description);

        console.log(postsClass.edit('21', {description: 'test change'}))
        console.log(postsClass.get('21').description);

        var page1 = postsClass.getPage(0, 10);
        console.log(page1[5].id);

        var page2 = postsClass.getPage(10, 10);
        console.log(page2[5].id);

        var page3 = postsClass.getPage(0, 10, {author: 'Иванов Иван'});
        console.log(page3[5].id);

    }
    ()
)
;
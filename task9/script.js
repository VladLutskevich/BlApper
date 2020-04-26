window.onload = function () {

    var user = {name: "Mohamed", image: "images/liv.jpg"};

    document.getElementById("userInfoName").textContent = user.name;
    document.getElementById("userInfoAvatar").setAttribute("src", user.image);

    if (user.name === "undefined" || user.name === "") {
        document.getElementById("createPost").style.display = "none";
        document.getElementById("userInfo").style.display = "none";
        document.getElementById("log").textContent = "Log In";
    }

    class PostCollection {

        constructor(_posts) {
            this._posts = _posts;
        }

        clear() {
            this._posts.splice(0);
        }

        getAll() {
            return this._posts;
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

    class view {

        static build(post) {
            var postDiv = document.createElement("div");
            postDiv.className = "postDiv";
            postDiv.id = post.id;

            var infoDiv = document.createElement("div");

            if (user.name === post.author) {

                var deleteA = document.createElement("a");
                deleteA.className = "editDelete";
                deleteA.setAttribute("href", "index.html");
                deleteA.textContent = "Delete";
                infoDiv.appendChild(deleteA);

                var editA = document.createElement("a");
                editA.className = "editDelete";
                editA.setAttribute("href", "index.html");
                editA.textContent = "Edit";
                infoDiv.appendChild(editA);
            }

            var par = document.createElement("p");

            var img = document.createElement("img");
            img.className = "postAvatar";
            img.setAttribute("src", "images/unknownUser.jpg"); //author avatar
            img.setAttribute("alt", "author avatar");
            par.appendChild(img);

            var name = document.createElement("h2");
            name.className = "postName";
            name.textContent = post.author;
            par.appendChild(name);

            var time = document.createElement("span");
            time.className = "postTime";
            time.textContent = post.createdAt.toUTCString();
            par.appendChild(time);

            infoDiv.appendChild(par);

            postDiv.appendChild(infoDiv);

            var text = document.createElement("div");
            text.className = "postText";

            var parText = document.createElement("p");
            parText.textContent = post.description;
            text.appendChild(parText);

            postDiv.appendChild(text);

            if (post.photoLink !== "") {
                var postImgDiv = document.createElement("div");
                postImgDiv.className = "postImgDiv";

                var postImg = document.createElement("img");
                postImg.className = "postImg";
                postImg.setAttribute("src", post.photoLink);
                postImg.setAttribute("alt", "post image");
                postImgDiv.appendChild(postImg);

                postDiv.appendChild(postImgDiv);
            }
            return postDiv;
        }

        static displayPost(post) {

            var postDiv = this.build(post);

            document.getElementById("posts").insertBefore(postDiv, document.getElementById("addTenDiv"));

        }

        static displayAllPosts(posts) {
            posts.forEach(post => this.displayPost(post));
        }

        static delete(post) {
            postCollection.remove(post.id);
            document.getElementById(post.id).remove();
        }

        static add(post) {
            if (postCollection.add(post)) {
                this.displayPost(post);
            }
        }

        static edit(post, newPost) {
            if (postCollection.edit(post.id, newPost)) {
                document.getElementById("posts").replaceChild(this.build(postCollection.get(post.id)), document.getElementById(post.id));
            }
        }

    }


    var posts = [
        {
            id: '1',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Mohamed',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '2',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-10T23:00:00'),
            author: 'Mohamed',
            photoLink: ''
        },

        {
            id: '3',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-11T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'images/goldenCup.jpg'
        },

        {
            id: '4',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-12T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },

        {
            id: '5',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-13T23:00:00'),
            author: 'Mohamed',
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
            author: 'Mohamed',
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
            author: 'Mohamed',
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

    ];

    var postCollection = new PostCollection(posts);

    view.displayAllPosts(postCollection.getAll());

    view.displayPost(postCollection.get("3"));

    view.delete(postCollection.get("3"));

    view.add({
        id: '21',
        description: 'Пост 21',
        createdAt: new Date('2020-03-28T23:00:00'),
        author: 'Петр',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    });

    view.edit(postCollection.get("12"), {
        id: '13',
        description: 'Пост 13',
        createdAt: new Date('2020-03-21T23:00:00'),
        author: 'Петр',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    })
    
};
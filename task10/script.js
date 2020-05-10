let homeString = "<div id=\"userInfo\">\n" +
    "        <h3 id=\"userInfoName\"></h3>\n" +
    "        <img id=\"userInfoAvatar\"\n" +
    "             alt=\"user avatar\">\n" +
    "        <h3 class=\"userInfoH3\">Posts: 3</h3>\n" +
    "        <h3 class=\"userInfoH3\">Likes: 3</h3>\n" +
    "        <h3 class=\"userInfoH3\" id=\"favouriteHashtags\">Favourite hashtags:</h3>\n" +
    "        <p>\n" +
    "        <div class=\"tag\">#GoldenCup</div>\n" +
    "        <div class=\"tag\">#WAT3-0LIV</div>\n" +
    "        <div class=\"tag\">#Unbeaten</div>\n" +
    "        <div class=\"tag\">#Arsenal</div>\n" +
    "        <div class=\"tag\">#EPL</div>\n" +
    "        </p>\n" +
    "\n" +
    "    </div>\n" +
    "    <div id=\"posts\">\n" +
    "        <div id=\"addTenDiv\">\n" +
    "            <button class=\"button\" id=\"addTen\" onclick=\"addTen()\">Add 10 more</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div id=\"search\">\n" +
    "        <form>\n" +
    "            <h3 id=\"filters\">Filters</h3>\n" +
    "            <h3 class=\"searchH\">Author:</h3>\n" +
    "            <input type=\"text\" id=\"author\">\n" +
    "            <h3 class=\"searchH\">Hashtag:</h3>\n" +
    "            <input type=\"text\" placeholder=\"#Hashtag\">\n" +
    "            <h3 class=\"searchH\">From:</h3>\n" +
    "            <input type=\"datetime-local\" placeholder=\"From\" id=\"from\">\n" +
    "            <h3 class=\"searchH\">To:</h3>\n" +
    "            <input type=\"datetime-local\" placeholder=\"To\" id=\"to\">\n" +
    "            <button class=\"button\" id=\"searchButton\" onclick=\"searchFilter()\">Search</button>\n" +
    "        </form>\n" +
    "    </div>";


let loginString = " <div id=\"logIn\">\n" +
    "        <form>\n" +
    "            <p><b>Login:</b></p>\n" +
    "            <input type=\"text\" placeholder=\"Email\" class=\"login-field\" id=\"email\">\n" +
    "            <p><b>Password:</b></p>\n" +
    "            <input type=\"password\" class=\"login-field\" id=\"password\">\n" +
    "            <button class=\"button submit-center\" onclick=\"logIn()\">Log In</button>\n" +
    "        </form>\n" +
    "    </div>";

let createPostString = " <div id=\"userInfo\">\n" +
    "        <h3 id=\"userInfoName\"></h3>\n" +
    "        <img id=\"userInfoAvatar\"\n" +
    "             alt=\"user avatar\">\n" +
    "        <h3 class=\"userInfoH3\">Posts: 3</h3>\n" +
    "        <h3 class=\"userInfoH3\">Likes: 3</h3>\n" +
    "        <h3 class=\"userInfoH3\" id=\"favouriteHashtags\">Favourite hashtags:</h3>\n" +
    "        <p>\n" +
    "        <div class=\"tag\">#GoldenCup</div>\n" +
    "        <div class=\"tag\">#WAT3-0LIV</div>\n" +
    "        <div class=\"tag\">#Unbeaten</div>\n" +
    "        <div class=\"tag\">#Arsenal</div>\n" +
    "        <div class=\"tag\">#EPL</div>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "    <div id=\"create-post\">\n" +
    "        <form>\n" +
    "            <p><b>Post message:</b></p>\n" +
    "            <textarea placeholder=\"Text...\" class=\"post-field\" id=\"message\" cols=\"60\" rows=\"5\" maxlength=\"200\"\n" +
    "                      autofocus></textarea>\n" +
    "            <p><b>Photo url:</b></p>\n" +
    "            <textarea placeholder=\"URL...\" class=\"post-field\" id=\"photoUrl\" cols=\"60\" rows=\"5\"\n" +
    "                      maxlength=\"200\"></textarea>\n" +
    "            <button class=\"button submit-center\" id=\"submitPost\" onclick=\"submitNewPost()\">Submit</button>\n" +
    "        </form>\n" +
    "    </div>";


let countAddTen = 0;

let filterConfig;

let posts = JSON.parse(localStorage.getItem("posts"));

let users = [
    {
        name: 'Иванов Иван',
        email: 'ivan@mail.ru',
        password: '12345',
        image: 'images/liv.jpg'
    },
    {
        name: 'Mohamed',
        email: 'mo@mail.ru',
        password: '12345',
        image: 'images/liv.jpg'
    },
    {
        name: 'Петр',
        email: 'petr@mail.ru',
        password: '12345',
        image: 'images/arsenal.jpg'
    }
];


let user = {name: "", image: ""};

class PostCollection {

    _posts;

    constructor() {
        this._posts = [];
    }

    getLastInd() {
        return this._posts[this._posts.length - 1].id;
    }

    clear() {
        this._posts.splice(0);
    }

    getAll() {
        return this._posts;
    }

    getInd(id) {
        for (let i = 0; i < this._posts.length; i++) {
            if (this._posts[i].id === id) {
                return i;
            }
        }
    }

    get(id) {
        for (let i = 0; i < this._posts.length; i++) {
            if (this._posts[i].id === id) {
                return this._posts[i];
            }
        }
    }

    _validate(post) {
        if (typeof (post.id) !== 'string' || post.id === '' || typeof (post.description) !== 'string' || post.description.length > 200
            || !(post.createdAt instanceof Date) || typeof (post.author) !== 'string' || post.author === '' || typeof (post.photoLink) !== 'string' || (post.description === '' && post.photoLink === '')) {
            return false;
        }
        return true;
    }

    add(post) {
        if (this._validate(post)) {
            this._posts.push(post);
            this.save();
            return true;
        }
        return false;
    }

    edit(id, post) {
        let ind = this.getInd(id);
        let tmpPost = Object.assign({}, this._posts[ind]);
        if (typeof post.description !== 'undefined') {
            tmpPost.description = post.description;
        }
        if (typeof post.photoLink !== 'undefined') {
            tmpPost.photoLink = post.photoLink;
        }
        if (this._validate(tmpPost)) {
            this._posts[ind] = tmpPost;
            this.save();
            return true;
        }
        return false;

    }


    remove(id) {
        let ind = this.getInd(id);
        this._posts.splice(ind, 1);
        this.save();
    }


    getPage(skip = 0, top = 10, filterConfig) {
        let arr = [];
        let toDate;
        let fromDate;
        let author;
        if (typeof (filterConfig) !== 'undefined') {
            toDate = new Date(filterConfig.to);
            fromDate = new Date(filterConfig.from);
            if (isNaN(toDate)) {
                toDate = this._posts[this._posts.length - 1].createdAt;
            }

            if (isNaN(fromDate)) {
                fromDate = this._posts[0].createdAt;
            }
            author = filterConfig.author;
        } else {
            toDate = this._posts[this._posts.length - 1].createdAt;
            fromDate = this._posts[0].createdAt;
        }
        let skipCount = 0;
        let topCount = 0;

        if (typeof (author) === 'string' && author !== '') {
            for (let i = this._posts.length - 1; i >= 0; i--) {
                if (fromDate <= this._posts[i].createdAt && toDate >= this._posts[i].createdAt && author === this._posts[i].author) {
                    if (skipCount >= skip && topCount < top) {
                        arr.push(this._posts[i]);
                        topCount++;
                    }
                    skipCount++;
                }
                if (topCount >= top) {
                    break;
                }
            }
        } else if (typeof (author) !== 'string' || author === '') {
            for (let i = this._posts.length - 1; i >= 0; i--) {
                if (fromDate <= this._posts[i].createdAt && toDate >= this._posts[i].createdAt) {
                    if (skipCount >= skip && topCount < top) {
                        arr.push(this._posts[i]);
                        topCount++;
                    }
                    skipCount++;
                }
                if (topCount >= top) {
                    break;
                }
            }
        }

        return arr;

    }

    addAll(posts) {
        let arr = [];
        for (let i = 0; i < posts.length; i++) {
            posts[i].createdAt = new Date(posts[i].createdAt);
            if (this._validate(posts[i])) {
                this._posts.push(posts[i]);
            } else {
                arr.push(posts[i]);
            }
        }
        this.save();
        return arr;
    }

    save() {
        localStorage.setItem("posts", JSON.stringify(this._posts));
    }

}

let postCollection = new PostCollection();
postCollection.addAll(posts);

class View {

    static build(post) {
        let postDiv = document.createElement("div");
        postDiv.className = "postDiv";
        postDiv.id = post.id;

        let infoDiv = document.createElement("div");

        if (user.name === post.author) {

            let deleteA = document.createElement("a");
            deleteA.className = "editDelete";
            deleteA.setAttribute("onclick", "deletePost(this.parentNode.parentNode.id)");
            deleteA.textContent = "Delete";
            infoDiv.appendChild(deleteA);

            let editA = document.createElement("a");
            editA.className = "editDelete";
            editA.setAttribute("onclick", "editPost(this.parentNode.parentNode.id)");
            editA.textContent = "Edit";
            infoDiv.appendChild(editA);
        }

        let par = document.createElement("p");

        let img = document.createElement("img");
        img.className = "postAvatar";
        img.setAttribute("src", "images/unknownUser.jpg"); //author avatar
        img.setAttribute("alt", "author avatar");
        par.appendChild(img);

        let name = document.createElement("h2");
        name.className = "postName";
        name.textContent = post.author;
        par.appendChild(name);

        let time = document.createElement("span");
        time.className = "postTime";
        time.textContent = post.createdAt.toUTCString();
        par.appendChild(time);

        infoDiv.appendChild(par);

        postDiv.appendChild(infoDiv);

        let text = document.createElement("div");
        text.className = "postText";

        let parText = document.createElement("p");
        parText.textContent = post.description;
        text.appendChild(parText);

        postDiv.appendChild(text);

        if (post.photoLink !== "") {
            let postImgDiv = document.createElement("div");
            postImgDiv.className = "postImgDiv";

            let postImg = document.createElement("img");
            postImg.className = "postImg";
            postImg.setAttribute("src", post.photoLink);
            postImg.setAttribute("alt", "post image");
            postImgDiv.appendChild(postImg);

            postDiv.appendChild(postImgDiv);
        }
        return postDiv;
    }

    static displayPost(post) {

        let postDiv = this.build(post);

        document.getElementById("posts").insertBefore(postDiv, document.getElementById("addTenDiv"));

    }

    static displayAllPosts(posts) {
        posts.forEach(post => this.displayPost(post));
    }


    static delete(id) {
        postCollection.remove(id);
        document.getElementById(id).remove();
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


function goHome() {
    document.getElementById("log").style.display = "inline";
    document.getElementById("content").innerHTML = homeString;
    homeContent();
}

function goToLogIn() {
    document.getElementById("log").style.display = "none";
    document.getElementById("content").innerHTML = loginString;
}

function goCreate() {
    document.getElementById("createPost").style.display = "none";
    document.getElementById("content").innerHTML = createPostString;
    document.getElementById("userInfoName").textContent = user.name;
    document.getElementById("userInfoAvatar").setAttribute("src", user.image);
}

function logOut() {
    localStorage.removeItem("name");
    localStorage.removeItem("image");
    user.name = '';
    user.image = '';
    goHome();
}

function logIn() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const result = users.filter(user => user.email === email);
    if (typeof (result[0]) === 'undefined') {
        alert("User with this email does not exist");
        goToLogIn();
    } else if (result[0].password !== password) {
        alert("Incorrect password");
        goToLogIn();
    } else {
        localStorage.setItem("name", result[0].name);
        localStorage.setItem("image", result[0].image);
        goHome();
    }

}

function homeContent() {
    if (localStorage.getItem("name") !== null) {
        user.name = localStorage.getItem("name");
        user.image = localStorage.getItem("image");
    }

    document.getElementById("userInfoName").textContent = user.name;
    document.getElementById("userInfoAvatar").setAttribute("src", user.image);

    if (user.name === "undefined" || user.name === "") {
        document.getElementById("createPost").style.display = "none";
        document.getElementById("userInfo").style.display = "none";
        document.getElementById("log").textContent = "Log In";
        document.getElementById("log").setAttribute("onclick", "goToLogIn()");
    } else {
        document.getElementById("createPost").style.display = "inline";
        document.getElementById("log").textContent = "Log Out";
        document.getElementById("log").setAttribute("onclick", "logOut()");
    }

    if (typeof (filterConfig) !== 'undefined') {
        document.getElementById("author").value = filterConfig.author;
        document.getElementById("from").value = filterConfig.from;
        document.getElementById("to").value = filterConfig.to;
    }

    countAddTen = 0;

    View.displayAllPosts(postCollection.getPage(countAddTen, 10, filterConfig));
    countAddTen += 10;
}

window.onload = function () {
    homeContent();
};


function addTen() {
    View.displayAllPosts(postCollection.getPage(countAddTen, 10, filterConfig));
    countAddTen += 10;
}

function deletePost(id) {
    View.delete(id);
    countAddTen--;
}

function editPost(id) {
    goCreate();
    document.getElementById("submitPost").setAttribute("onclick", "submitEditPost(" + id + ")");
    document.getElementById("message").value = postCollection.get(id).description;
    document.getElementById("photoUrl").value = postCollection.get(id).photoLink;
}

function submitNewPost() {
    let message = document.getElementById("message").value;
    let photoUrl = document.getElementById("photoUrl").value;


    let current = postCollection.getLastInd() + 1;
    let post = {
        id: current,
        description: message,
        createdAt: new Date(),
        author: user.name,
        photoLink: photoUrl,
    };

    if (postCollection.add(post)) {
        goHome();
    } else {
        alert("Invalid post");
        goCreate();
    }
}

function submitEditPost(id) {
    let message = document.getElementById("message").value;
    let photoUrl = document.getElementById("photoUrl").value;
    let post = postCollection.get(id + '');
    let newPost = {
        id: post.id,
        description: message,
        createdAt: post.createdAt,
        author: post.author,
        photoLink: photoUrl,
    };
    if (postCollection.edit(id + '', newPost)) {
        goHome();
    } else {
        alert("Invalid changes");
        goCreate();
    }
}

function searchFilter() {
    let author = document.getElementById("author").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    filterConfig = {
        author: author,
        from: from,
        to: to
    };
    goHome();

}
import java.util.Date;

public class Post {
    public String id;
    public String description;
    public Date createdAt;
    public String author;
    public String photoLink;

    Post() {
    }

    public Post(String id, String description, Date createdAt, String author, String photoLink) {
        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.author = author;
        this.photoLink = photoLink;
    }



}
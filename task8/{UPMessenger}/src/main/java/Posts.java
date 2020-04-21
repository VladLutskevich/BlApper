import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonSyntaxException;

public class Posts {


    public static List<Post> getPosts() {
        return posts;
    }

    public static void setPosts(List<Post> posts) {
        Posts.posts = posts;
    }

    private static List<Post> posts = new ArrayList<>();

    Posts(){
        posts = new ArrayList<>();
    }

    Posts(List<Post> posts){
        this.posts = new ArrayList<>(posts);
    }


    public static boolean add(String jsonPost) {
        Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd'T'HH:mm:ss").create();
        Post newPost;

        try {
            newPost = gson.fromJson(jsonPost, Post.class);
            if (newPost == null || newPost.author == null) {
                return false;
            }
        } catch (JsonSyntaxException e) {
            return false;
        }

        newPost.id = String.valueOf(posts.size());
        newPost.createdAt = new Date();
        posts.add(newPost);
        return true;
    }

    public static Post get(String id) {
        for (int i = 0; i < posts.size(); i++) {
            if (posts.get(i).id.equals(id)) {
                return posts.get(i);
            }
        }
        return null;
    }

    public static boolean remove(String id) {
        for (int i = 0; i < posts.size(); i++) {
            if (posts.get(i).id.equals(id)) {
                posts.remove(i);
                return true;
            }
        }
        return false;
    }

}



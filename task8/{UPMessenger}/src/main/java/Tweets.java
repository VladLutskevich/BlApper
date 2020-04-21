import com.google.gson.Gson;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

import java.util.*;


@WebServlet("/tweets/*")
public class Tweets extends HttpServlet {
    private void getPost(String id, HttpServletResponse response) throws IOException {
        Post post = Posts.get(id);
        response.getWriter().print((new Gson()).toJson(post));
    }


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        List<String> uriList = Arrays.asList(request.getRequestURI().split("/"));
        if (uriList.get(2).equals("search")) {
            for (int i = Posts.getPosts().size() - 1; i > Posts.getPosts().size() - 11; i--) {
                getPost(i + "", response);
            }
        } else {
            String id = request.getParameter("id");
            if (id != null) {
                getPost(id, response);
            }

        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        StringBuilder sb = new StringBuilder();
        BufferedReader reader = request.getReader();
        try {
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line).append('\n');
            }
        } finally {
            reader.close();
        }
        String post = sb.toString();
        boolean postAdded = Posts.add(post);
        response.getWriter().print(postAdded);
    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String id = request.getParameter("id");
        response.getWriter().print(Posts.remove(id));
    }


}
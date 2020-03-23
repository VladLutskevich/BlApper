import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/get")
public class GetName extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("text/html");
        String name = request.getParameter("name");
        PrintWriter writer = response.getWriter();
        try {
            writer.println("<span>Name Is " + name + "</span>");
        } finally {
            writer.close();
        }
    }
}
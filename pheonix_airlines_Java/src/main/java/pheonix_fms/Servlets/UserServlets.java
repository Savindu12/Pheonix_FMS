package net.javaguides.pheonix_airlines.web;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.javaguides.pheonix_airlines.dao.UserDAO;
import net.javaguides.pheonix_airlines.model.User;



public class UserServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private UserDAO userDAO;

   

    public void init() {

        userDAO = new UserDAO();

    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response)

            throws ServletException, IOException {

        doGet(request, response);

    }



    protected void doGet(HttpServletRequest request, HttpServletResponse response)

            throws ServletException, IOException {

        String action = request.getServletPath();

                try {

            switch (action) {

            case "/new":

                showNewForm(request, response);

                break;

            case "/insert":

                insertUser(request, response);

                break;

            case "/delete":

                deleteUser(request, response);

                break;

            case "/edit":

                showEditForm(request, response);

                break;

            case "/update":

                updateUser(request, response);

                break;

            default:

                listUser(request, response);

                break;

            }

        } catch (SQLException ex) {

            throw new ServletException(ex);

        }

    }

}

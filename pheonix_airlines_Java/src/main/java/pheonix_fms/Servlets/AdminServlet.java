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
import net.javaguides.pheonix_airlines.dao.AdminDAO;
import net.javaguides.pheonix_airlines.model.Admin;



public class AdminServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private AdminDAO AdminDAO;

   

    public void init() {

        AdminDAO = new AdminDAO();

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

                insertAdmin(request, response);

                break;

            case "/delete":

                deleteAdmin(request, response);

                break;

            case "/edit":

                showEditForm(request, response);

                break;

            case "/update":

                updateAdmin(request, response);

                break;

            default:

                listAdmin(request, response);

                break;

            }

        } catch (SQLException ex) {

            throw new ServletException(ex);

        }

    }

    private void listAdmin(HttpServletRequest request, HttpServletResponse response)

            throws SQLException, IOException, ServletException {

        List<Admin> listAdmin = AdminDAO.selectAllAdmins();

        request.setAttribute("listAdmin", listAdmin);

        RequestDispatcher dispatcher = request.getRequestDispatcher("AdminService.java");

        dispatcher.forward(request, response);

    }



    private void showNewForm(HttpServletRequest request, HttpServletResponse response)

            throws ServletException, IOException {

        RequestDispatcher dispatcher = request.getRequestDispatcher("AdminService.java");

        dispatcher.forward(request, response);

    }

    private void showEditForm(HttpServletRequest request, HttpServletResponse response)

            throws SQLException, ServletException, IOException {

        int AdminId = Integer.parseInt(request.getParameter("AdminId"));

        Admin existingAdmin = AdminDAO.selectAdmin(AdminId);

        RequestDispatcher dispatcher = request.getRequestDispatcher("AdminService.java");

        request.setAttribute("Admin", existingAdmin);

        dispatcher.forward(request, response);



    }



    private void insertAdmin(HttpServletRequest request, HttpServletResponse response)

            throws SQLException, IOException {

        String AdminId = request.getParameter("AdminId");

        String AdminName = request.getParameter("AdminName");

        String AdminAddress = request.getParameter("AdminAddress");

        String Adminemail = request.getParameter("Adminemail");

        User newAdmin = new newAdmin(AdminId, AdminName, AdminAddress, Adminemail);

        AdminDAO.insertAdmin(newAdmin);

        response.sendRedirect("Adminlist");

    }

    private void updateAdmin(HttpServletRequest request, HttpServletResponse response)

            throws SQLException, IOException {

         String AdminId = request.getParameter("AdminId");

        String AdminName = request.getParameter("AdminName");

        String AdminAddress = request.getParameter("AdminAddress");

        String Adminemail = request.getParameter("Adminemail");

        Admin newAdmin = new newAdmin(AdminId, AdminName, AdminAddress, Adminemail);

        AdminDAO.updateAdmin(newAdmin);

        response.sendRedirect("Adminlist");

    }


    private void deleteUser(HttpServletRequest request, HttpServletResponse response)

            throws SQLException, IOException {

        int Adminid = Integer.parseInt(request.getParameter("Adminid"));

        AdminDAO.deleteAdmin(Adminid);

        response.sendRedirect("Adminlist");



    }



}

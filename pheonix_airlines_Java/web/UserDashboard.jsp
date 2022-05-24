<%@page import="model.dbcon"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.util.List"%>
<%@page import="model.tickets"%>
<% 
    
        String uname= (String)session.getAttribute("user");
        if(uname!=null){%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
Connection connection = null;
Statement statement = null;
ResultSet resultSet = null;
%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
         <!-- Font Awesome -->
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          rel="stylesheet"
        />
        <!-- Google Fonts -->
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <!-- MDB -->
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.css"
          rel="stylesheet"
        />
        
        <!-- MDB -->
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.js"
        ></script>
        
        <link rel="stylesheet" href="./profile.css">
        <link rel="stylesheet" href="../home.css">
    
    </head>
    <body>
       <style>
    .nav-logo{
    width: 25px;
    margin-left: 5px;
}
</style>

<nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <image src="../images/Logo.png" class="nav-logo"/>
            <span class="nav-name"> Phoenix Airlines </span>
        </a> 
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
         
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link " href="../index.jsp">Home</a>
            <a class="nav-link active" href="#">Flights</a>
            <a class="nav-link" href="../price.jsp">Pricing</a>
            <form action="../logout" method="POST">
                <input type="submit" value="Log Out" style="color:black;border-radius:20px;background-color: white;margin: 5px 5px 0px 5px"></form> 
            
            
          </div>
        </div>
  </div>
</nav>
<% 
String name= (String)session.getAttribute("user");
String mail= (String)session.getAttribute("mail");
String last= (String)session.getAttribute("last");
String ip= (String)session.getAttribute("ip");
String id = (String)session.getAttribute("id");
              /*String tickect =(String) request.getAttribute("ticket");
              String flight =(String) request.getAttribute("flight");
              String seat = (String) request.getAttribute("seat");
              String price = (String) request.getAttribute("price");
              String date = (String) request.getAttribute("date");
              String desti = (String) request.getAttribute("desti");
              String cls = (String) request.getAttribute("cls");*/
%>
       <div class="prof">
           <center>
               <h1>Welcome <%= name%> ... </h1><br>
           <h5><b>Profile Details</b></h5>
           </center>
           <br> 
           <div class="row">
               <center><div class="col-lg-6 col-sm-12">
                   <table class="table " style="text-align:center;">
                       <thead>
                        <tr>
                          
                          <th scope="col">User Name</th>
                          <th scope="col"><%= name %></th>
                          
                        </tr>
                      </thead>
                     
                        <tr>
                          
                          <th scope="col">E mail</th>
                          <th scope="col"><%= mail%></th>
                          
                        </tr>
                      
                      
                        <tr>
                          
                          <th scope="col">Last Login</th>
                          <th scope="col"><%= last%></th>
                          
                        </tr>
                      
                        <tr>
                          
                          <th scope="col">IP Address</th>
                          <th scope="col"><%= ip%></th>
                          
                        </tr>
                      
                   </table></div><br>
                   <br>
                   <h5><b>Reservation Details</b></h5><br>
            <table class="table">
            <thead class="table-dark">
                <tr>
                    <th>TiketID</th>
                    <th>FlightID</th>
                    <th>ClientID</th>
                    <th>Seat Numbers</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Destination</th>
                    <th>Class</th>
                    <th>Delete</th>
                </tr>
            </thead>
            
            <%
            try{
            dbcon con = new dbcon();
            statement =con.connection().createStatement();
            String sql2 = "SELECT * FROM tiskets  WHERE clientid LIKE '" + id + "'";
            resultSet = statement.executeQuery(sql2);
            while(resultSet.next()){%>

            <tbody>
                <tr>
                    <td><%=resultSet.getString("ticketid")%></td>
                    <td><%=resultSet.getString("flightid")%></td>
                    <td><%=resultSet.getString("clientid")%></td>
                    <td><%=resultSet.getString("seatno")%></td>
                    <td><%=resultSet.getString("price")%></td>
                    <td><%=resultSet.getString("date")%></td>
                    <td><%=resultSet.getString("destination")%></td>
                    <td><%=resultSet.getString("class")%></td>
                    <td>
                        <form action="../deleteTicket" method="POST">
                            <input type="hidden" name="tiketid" value="<%=resultSet.getString("ticketid")%>">
                            <input type="submit" value="Delete" class="btn btn-dark"/>
                        </form>
                    </td>
                </tr>
            </tbody>
            
            <%
                }
            connection.close();
            }catch(Exception e){
                e.printStackTrace();
            }      
            %>
        </table>
                   
               
              </center>
           </div>
      
       </div>         
       

<div class="container-fluid footer" >
            <div class="row">
                <div class="col-lg-4 col-sm-12" style="text-align: center;color: white">
                   <image src="../images/logo2.jpg" class="footer-logo"/>
                   <h6>Phoenix Airlines</h6>
                   <p>Find islands' best offers with SriLankan Holidays</p>
                </div>
                <div class="col-lg-4 col-sm-12"><br>
                    <form>

                        <!-- Email input -->
                        <div>
                          <label style="color: white">Email address</label>
                          <input type="email"  class="dropdown" />
                        </div>

                        <!-- Message input -->
                        <div>
                          <label style="color: white">Message</label>
                          <textarea class="dropdown"  rows="2"></textarea>
                        </div><br>

                        <!-- Submit button -->
                        <button type="submit" class="btn btn-light btn-block mb-4" style="width: 200px">Send</button>
                    </form>
                </div>
                <div class="col-lg-4 col-sm-12" style="text-align: right; color: white;padding: 40px 70px 0px 0px">
                    <p>+94 152 524 45 &nbsp;<i class="fas fa-phone"></i></p>
                    <p>phoenixairlines@gmail.com &nbsp;<i class="fas fa-envelope-square"></i></p>
                    <p>NO.25, Pitipana South , Homagama &nbsp; <i class="fas fa-home"></i></p><br><br>
                    <span><i class="fab fa-facebook fa-2x"></i>&nbsp;&nbsp;<i class="fab fa-twitter fa-2x"></i>&nbsp;&nbsp;<i class="fab fa-linkedin fa-2x"></i>&nbsp;&nbsp;<i class="fab fa-instagram fa-2x"></i></span>
                </div>
                
            </div>
            <center><p style="color: white;margin: 10px"><i class="fas fa-copyright"></i> copyright phoenix airlines 2021</p></center><br>
        </div>
    </body>
</html>
<% }else{
            
            response.sendRedirect("../login.jsp");
        }%>

<%@page import="Admin.User"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    
	<head>
             <%
            String userid=(String)session.getAttribute("name");
            if(userid==null)
            {
                response.sendRedirect("Login.jsp");
                return;
            }
            %>
		<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Jekyll v4.1.1">
   

    <link rel="canonical" href="https://getbootstrap.com/docs/4.5/examples/dashboard/">

    <!-- Bootstrap core CSS -->
<link href="assetsD/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>
    <!-- Custom styles for this template -->
    <link href="dashboard.css" rel="stylesheet">
                <title>staff Grade Two Dashboard</title>

	</head>        
  
    
    <body>
    
   
   
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Phoenix Airlines</a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
<!--  <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">-->

    <ul class="navbar-nav">
      
   
    </ul>
<ul class="navbar-nav ">
       
   
    </ul>
<ul class="navbar-nav ">
     
    </ul>
<ul class="navbar-nav">
      
    </ul>
  <ul class="navbar-nav">
     
    </ul>

<ul class="navbar-nav">
    <li>
      <a class="nav-link" href="home.jsp">Home</a>
    </li>
    </ul>

 <ul class="navbar-nav px-5 ">
        <li class="nav-item text-nowrap">
            <a class="nav-link"  href="#">${name}</a>
          
        </li>
   
    </ul>
    

<ul class="navbar-nav px-5">
    <li>
      <a class="nav-link" href="Login.jsp">Sign out</a>
    </li>

  </ul>
</nav>

<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="sidebar-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              <span data-feather="home"></span>
             Admin Dashboard <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#manageUsers">
              <span data-feather="user"></span>
              Manage Users
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#searchflght">
              <span data-feather="search"></span>
              Search Flight details
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#searchTickets">
              <span data-feather="search"></span>
              Search Ticket Details
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#userActivity">
              <span data-feather="send"></span>
             User Activity
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#updateuser">
              <span data-feather="user"></span>
             Update User
            </a>
          </li>
          
        </ul>

        
      </div>
    </nav>
   </div>
 
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Admin Dashboard</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group mr-2"></div>
        </div>
      </div>
        
        <br>
        <br>
         
            
        <div id="manageUsers">
         
         <br>
         <br>
        <div class="table-responsive">
          <h2>View Users</h2>
        <% String userType = "All";
        try{
              userType = request.getAttribute("userType").toString();
        }catch (Exception e) {
                        System.out.println("");
        }
       
        
        
        %>
        <form action="FilterUsers" id="userType">

            <label>Filter users</label>
            <select name="userType" class="btn btn-sm btn-outline-secondary dropdown-toggle" >
                <% if (userType.equals("All")) { %>
                <option selected value="All">All</option>
                <% } else { %>
                <option value="All">All</option>
                <% } %>

                <% if (userType.equals("Clients")) { %>
                <option selected value="Clients">Clients</option>
                <% } else { %> 
                <option value="Clients">Clients</option>
                <% } %>


                <% if (userType.equals("Staff01")) { %>
                <option selected value="Staff01">Staff01</option>
                <% } else { %>
                <option value="Staff01">Staff01</option>

                <% } %>


                <% if (userType.equals("Staff02")) { %>
                <option selected value="Staff02">Staff02</option>
                <% } else { %>
                <option  value="Staff02">Staff02</option>
                <% } %>



            </select>
            <input type="submit" value="Search" class="btn btn-sm btn-outline-secondary"/>

        </form>

<br><br>
        <h2>Search Results</h2>
        <table border="0" class="table table-striped table-sm">
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>First name</th>
                    <th>Last Name</th>
                    <th>User Type</th>
                </tr>  
            </thead>
            <tbody>

                <%
                    int UID;
                    try {
                        List results = (List) request.getAttribute("result");
                        //Iterator it = results.iterator();
                        for (Object user : results) {
                %> <tr>
                    <td><% out.println(((ArrayList) user).get(0));%></td>
                    <td><% out.println(((ArrayList) user).get(1));%></td>
                    <td><% out.println(((ArrayList) user).get(2));%></td>
                    <td><% out.println(((ArrayList) user).get(3));%>
                        <form action="UserProfile"><button value="<%out.println(((ArrayList) user).get(0));%>" class="btn btn-sm btn-outline-secondary" name="UID">View Profile</button></form></td>
                </tr> <%
                        }
                    } catch (Exception e) {
                        System.out.println("");
                    }
                %> 
            </tbody>
        </table>
            
            <br><br>
            
             <%
                    try {
                      
                        User user=(User)request.getAttribute("userdetails");
                        
                       
                          %>
        <h2>User Profile :<%   out.println(user.getFirstName()+" "+user.getLastName());%></h2>
        <table border="0" class="table table-striped table-sm">
           
            <tbody>
                <tr>
                    <td>User ID</td>
                    <td><%  out.println(user.getUserId());%></td>
                </tr>
                <tr>
                    <td>First name</td>
                    <td><%   out.println(user.getFirstName());%></td>
                </tr>
                <tr>
                    <td>Last name</td>
                    <td><%  out.println(user.getLastName());%></td>
                </tr>
                <tr>
                    <td>grade id</td>
                    <td><%  out.println(user.getUserId());%></td>
                </tr>
                <tr>
                    <td>email</td>
                    <td><%  out.println(user.getEmail());%></td>
                </tr>
                <tr>
                    <td>User type</td>
                    <td><%  out.println(user.getUserType());
                 %></td>
                </tr>
                 <tr>
                     <td><a href="samplepage.jsp"> <input type="submit" value="Back" class="btn btn-sm btn-outline-secondary"/></a></td>
                     <td><form action="AdminDashboard.jsp"><a class="nav-link" href="#updateuser"><button 
          class="btn btn-sm btn-outline-secondary" value="<%session.setAttribute("userdetails", user);%>">Update Grade</button></a></form></td>
                </tr>
            </tbody>
        </table>
                
              <%
                    } catch (Exception e) {
                        System.out.println("");
                    }
              %>
             
    </div>
    </div>
            
      
         <br>
         <br>
        
         
         
         <div id="searchflght">
          <br>
         <br>
         <br>
         <div class="table-responsive">
           <h2>Search Flights</h2>  
           <form action="SearchFlights" method="POST">
             <table border="0">
               
                <tbody>
                    <tr>
                        <td><input type="text" name="destination" value="" class="form-control" /></td>
                        <td><input type="submit" value="Search" class="btn btn-sm btn-outline-secondary"/></td>
                    </tr>
                </tbody>
            </table>
          </form>
           
           <br><br>
            <h2>Flight Search Results</h2>
        <table border="0" class="table table-striped table-sm">
            <thead>
                <tr>
                    <th>Flight Number</th>
                    <th>Departure</th>
                    <th>Return</th>
                    <th>Airport</th>
                    <th>Destination</th>
                    <th>Economy eats</th>
                    <th>Business Seats</th>
                </tr>  
            </thead>
            <tbody>

                <%
                    
                    try {
                        List results = (List) request.getAttribute("flightResult");
                        //Iterator it = results.iterator();
                        for (Object user : results) {
                %> <tr>
                    <td><% out.println(((ArrayList) user).get(0));%></td>
                    <td><% out.println(((ArrayList) user).get(1));%></td>
                    <td><% out.println(((ArrayList) user).get(2));%></td>
                     <td><% out.println(((ArrayList) user).get(3));%></td>
                    <td><% out.println(((ArrayList) user).get(4));%></td>
                    <td><% out.println(((ArrayList) user).get(5));%></td>
                    <td><% out.println(((ArrayList) user).get(6));%>
                      </td>
                </tr> <%
                        }
                    } catch (Exception e) {
                        System.out.println("");
                    }
                %> 
            </tbody>
        </table>
            
           
           
        </div>
        </div>
        
         
         
         <br>
         <br>
       
         
         
         
         <div id="searchTickets">
         <br>
         <br>
         <br>
         <div class="table-responsive">
             <h2>Search Tickets</h2>  
            <form action="SearchTickets">
                 <form action="SearchFligths" method="POST">
             <table border="0">
               
                <tbody>
                    <tr>
                        <td><input type="text" name="ticketId" value="" class="form-control" /></td>
                        <td><input type="submit" value="Search" class="btn btn-sm btn-outline-secondary"/></td>
                    </tr>
                </tbody>
            </table>
          </form>

                
                
                
         </div>
        </div>
        
         
          
         <br>
         <br>
         
         
        
         <div id="userActivity">
            

         <br>
         <br>
         <br>
          <h2>User Activities</h2>
           <form action="">
             <input type="submit" value="view activities" class="btn btn-sm btn-outline-secondary"/>
        
         <div class="table-responsive">
           
        </div>
         </form>
        </div>
        
        
         <br>
         <br>
         <br>
         
         
         
         
         <div id="updateuser">
         <br>
         <br>
         <br>
         <div class="table-responsive">
               
              
              <%
                    try {
                      
                        User userdetail=(User)session.getAttribute("userdetails");
                        
                       
                          %>
        <h1>Update User Profile :<%   out.println(userdetail.getFirstName()+" "+userdetail.getLastName());%></h1>
        <table border="0" class="table table-striped table-sm">
           
            <tbody>
                <tr>
                    <td>User ID</td>
                    <td><%  out.println(userdetail.getUserId());%></td>
                </tr>
                <tr>
                    <td>First name</td>
                    <td><%   out.println(userdetail.getFirstName());%></td>
                </tr>
                <tr>
                    <td>Last name</td>
                    <td><%  out.println(userdetail.getLastName());%></td>
                </tr>
                 <tr>
                    <td>email</td>
                    <td><%  out.println(userdetail.getEmail());%></td>
                </tr>
                <tr>
                    <td>grade id</td>
                    <td><select name="gradeId"  class="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <option value="C01">C01</option>
                            <option value="S01">S01</option>
                            <option value="S02">S02</option>
                             <option value="A01">A02</option>
                        </select></td>
                </tr>
               
                <tr>
                    <td>User type</td>
                    <td><select name="userType"  class="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <option value="client">client</option>
                            <option value="staff one">staff one</option>
                            <option value="staff two">staff two</option>
                             <option value="Admin">Admin</option>
                            
                        </select></td><% 
               
                      
                    } catch (Exception e) {
                        System.out.println("");
                    }
                 %>
                </tr>
                 <tr >
                     <td colspan="2"> <input type="submit" value="Update" class="btn btn-sm btn-outline-secondary"/></td>
                    
                </tr>
            </tbody>
        </table>
             
        </div>
        </div>
        
        
         <br>
         <br>
         <br>
    </main>
   </div>  
 

<script src="jquery-3.5.1.slim.min.js"></script>
      <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery.slim.min.js"><\/script>');</script><script src="assetsD/dist/js/bootstrap.bundle.min.js"></script>
        <script src="feather.min.js"></script>
        <script src="Chart.min.js"></script>
        <script src="dashboard.js"></script>
 </body>
                
</html>
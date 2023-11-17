package editting;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

public class EditServlet extends HttpServlet {
   
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet EditServlet</title>");  
            out.println("</head>");
            out.println("<body>");
			
	//Fetching all user data
	
            String userName = request.getParameter("user_name");
	  String userEmail = request.getParameter("user_email");
	  String userPhone = request.getParameter("user_phone");
	  Part part = request.getPart("user_image");
	  String imageName = part.getSubmittedFileName();
	  String userStreet = request.getParameter("user_street");
	  String userCity = request.getParameter("user_city");
	  String userState = request.getParameter("user_state");
	  String userZipCode = request.getParameter("user_zip_code");
	  
//	  //Getting Session
//	  HttpSession s = request.getSession();
//	  User user = (User) s.getAttribute("currentUser");
//	  user.setName(userName);
//	  user.setEmail(userEmail);
//	  user.setPhone(userPhone);
//	  user.setImageName(imageName);
//	  user.setUserStreet(userStreet);
//	  user.setUserCity(userCity);
//	  user.setUserState(userState);
//	  user.setUserZipCode(userZipCode);
//	  
//	  //function on another page and we call this function here to update user details
//	  public boolean updateUser(User user){
//		  boolean f = false;
//	  try{
//		  String query = "update user set name=?, email=?, password=?, phone=?,  street=?, city=?. state=?. zipcode=? where id=?";
//		  PreparedStatement p = con.prepareStatement(query);
//		  p.setString(1, user.getName());
//		  p.setString(2, user.getEmail());
//		  p.setString(3, user.getPhonet());
//		  p.setString(4, user.getUserStreet());
//		  p.setString(5, user.getIserState());
//		  p.setString(6, user.getUserCity());
//		  p.setString(7, user.getUserState());
//		  p.setString(8, setUserZipCode());
//		  
//		  p.executeUpdate();
//		  f=true;
//	  }
//	  catch(Exception e){
//		  e.printStackTrace();
//	  }
//	  return f;
//	  }
//	  Update database...
//UserDao userDao = new UserDao (ConnectionProvider.getConnection());

//boolean ans = userDao.updateUser(user);
//if(ans){
//	out.println("updated to db");
//}
//else{
//	out.println("not updated...");
//}

            out.println("</body>");
            out.println("</html>");
        }
    } 

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /** 
     * Handles the HTTP <code>GET</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        processRequest(request, response);
    } 

    /** 
     * Handles the HTTP <code>POST</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        processRequest(request, response);
    }

    /** 
     * Returns a short description of the servlet.
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}

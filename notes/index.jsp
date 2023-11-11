<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notes</title>
    <link rel="stylesheet" href="style.css">
    <link
    href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
    rel="stylesheet"
  />
  <link
  href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
  rel="stylesheet"
/>
  <link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
  rel="stylesheet"
/>
  <% 
        String sessionValue = (String) session.getAttribute("email");
   %>
 <script>
        // Use JavaScript to set the session value in localStorage
        var sessionValue = '<%= sessionValue %>';
        localStorage.setItem('email', sessionValue);
    </script>
</head>
<body>
    
    <sql:setDataSource var="snapshot" driver="oracle.jdbc.OracleDriver"
                    url="jdbc:oracle:thin:@192.168.0.7:1521:orcl" user="system" password="toor" />
    
    <sql:query dataSource="${snapshot}" var="rs">
                    select * from notes order by note_id
                </sql:query>
    
    <header class="header">
      <!--dropbtn = profile, dropdown-content = info-->
        <a href="#" class="logo">NoteWorks</a>
        <nav class="navbar">
          <div class="dropdown">
          <div class="profile">
          </div>
          <div class="info">
            <i class="bx bx-x close-btn"></i>
            <button class="settings">Settings</button>
            <form action="logout.jsp" method="post">
                        <button type="submit">Logout</button>
            </form>
          </div>
          </div>
          </div>
        </nav>
        </div>
      </header>
    
      <section class="sidebar sidebar--isHidden">
        <div class="nav">
          <ul>
            <li><i class="ri-save-2-line save"></i></li>
            <li><i class="ri-add-line addNote"></i></li>
          </ul>
        </div>
        <div class="notes">
        <a class="active inactive" href="#home">User<i class="ri-close-circle-line crossNote"></i></a>
        <a href="#news" class="inactive">News<i class="ri-close-circle-line crossNote"></i></a>
        
        <c:forEach var="row" items="${rs.rows}">
             <a href="#<c:out value="${row.note_heading}" />" onclick="addNoteID('<c:out value="${row.note_id}" />');fetchNoteContent(noteId)" class="inactive">
             <!--<a href="#<c:out value="${row.note_heading}" />" class="inactive">-->
                 <c:out value="${row.note_heading}" /><i class="ri-close-circle-line crossNote"></i>
             </a>
        </c:forEach>
        </div>
      </section>
    
  <!-- Page content -->
  <div class="container">
      <textarea name="text" id="text" cols="120" rows="10" class="user_text" spellcheck="false" class="textzone" contenteditable="true">Welcome to Notes Website</textarea>
  </div>
  <div class="popup">
    <div class="popup-box">
    <i class="bx bx-x close-btn2"></i>
    <form>
      <label for="title">Title:</label>
      <br>
      <br>
      <input type="text" spellcheck="false" id="title" required/>
      <br>
        <button type="submit" class="addTitle">Add</button>
      </form>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>

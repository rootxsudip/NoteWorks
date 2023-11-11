<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html>

    <head>
        <title>Logout Page</title>
        <style>
            * {
                margin: 0px;
                padding: 0px;
            }
        </style>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    </head>

    <body>
        <div class="container text-center">
            <h1>Logout Page</h1>
            <% if ("POST".equals(request.getMethod())) {session.invalidate(); %>
                <h1>You have been successfully logged out.</h1>
                <h1><a display="3" class="btn btn-outline-primary mt-3" href="./dashboard.jsp">Go to
                        Login</a></h1>
                <% } %>
        </div>
    </body>

    </html>
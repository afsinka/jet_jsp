package com;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class MyServlet extends HttpServlet {

	// TODO generate serialVersionUID
	private static final long serialVersionUID = 1L;
	private static final Logger logger = LogManager.getLogger(MyServlet.class);

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		if (logger.isDebugEnabled()) {
			logger.debug("doPost() is invoked");
		}

		String username = request.getParameter("username");
		//String password = request.getParameter("password");

		if (logger.isDebugEnabled()) {
			logger.debug("userName: " + username);
		}

		response.sendRedirect("?root=aboutme");
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		if (logger.isDebugEnabled()) {
			logger.debug("doGet() is invoked");
		}

		String text = "Ajax response from Java!";

		response.setContentType("text/plain");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(text);
	}

}

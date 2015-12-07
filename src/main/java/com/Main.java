package com;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Main {

	private static final Logger logger = LogManager.getLogger(Main.class);

	public static void main(String[] args) {
		System.out.println("Starting...");

	}

	/**
	 * Test data which is invoked in javascript
	 * */
	public static String getTestData() {
		if (logger.isDebugEnabled()) {
			logger.debug("getTestData() is invoked");
		}
		return "Text data from Java!";
	}
}

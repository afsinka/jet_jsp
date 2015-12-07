<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Oracle JET for JSP</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" href="css/images/favicon.ico" type="image/x-icon" />

<!-- This is the main css file for the default Alta theme -->
<link rel="stylesheet" href="css/libs/oj/v1.1.2/alta/oj-alta-min.css"
	type="text/css" />

<!-- These style classes are for demonstration purposes only. -->
<link rel="stylesheet" href="css/demo-alta-patterns-min.css" />

<!-- This is where you would add any app specific styling -->
<link rel="stylesheet" href="css/override.css" type="text/css" />

<!-- RequireJS configuration file -->
<script data-main="js/main" src="js/libs/require/require.js"></script>

</head>
<body class="demo-appheader-offcanvas-pushwrapper">

	<div id="globalBody" style="display: none;">

		<!-- Show only if resolution is small as in mobile devices -->
		<div id="appDrawer"
			class="oj-offcanvas-start oj-panel demo-appheader-offscreencontent"
			style="height: 100%;">
			<div id='demoAppheaderOffCanvasInnerDiv'
				data-bind="ojModule: {name: 'header', viewName: 'demoAppHeaderOffCanvasTemplate'}"></div>
		</div>

		<!-- header -->
		<header id="headerWrapper" role="banner"
			data-bind="ojModule: { name: 'header'}"></header>

		<!-- Main Container -->
		<div id="mainContainer">
			<div class="oj-row">
				<!-- Navigation content -->
				<div class="oj-xl-3 oj-lg-3 oj-sm-12 oj-col">
					<div role="navigation" class="demo-page-content-area">

						<div id="navigationContent"
							data-bind="ojModule: { viewName: 'navContent'}"></div>
					</div>
				</div>
				
				<!-- Main content -->
				<div class="oj-xl-6 oj-lg-9 oj-sm-12 oj-col">
					<div role="main" class="demo-page-content-area">
						<div id="mainContent"
							data-bind="ojModule: { name: router.stateId()}"></div>
					</div>
				</div>

				<!-- Complementary content -->
				<div class="oj-xl-3 oj-sm-12 oj-col">
					<div role="complementary" class="demo-page-content-area">
						<div id="complementaryContent"
							data-bind="ojModule: { viewName: 'compContent'}"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

</body>
</html>
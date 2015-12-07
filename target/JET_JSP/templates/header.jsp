<div class="demo-appheader">
    <div class="oj-row demo-appheader-classic">
        <div class="oj-col demo-appheader-col">
            <div class="oj-row">

                <!-- Button that toggles off-canvas content. -->  
                <div class="demo-off-canvas-toggle demo-appheader-toggle-button">
                    <button class='oj-button-half-chrome demo-appheader-toggle-button'
                            data-bind="click:toggleAppDrawer,
			     ojComponent: {component:'ojButton', label: offScreenButtonLabel, display: 'icons', icons: {start: offScreenButtonIconClass}} ">
                    </button>
                </div>

                <!-- Application Navigation -->
                <!-- Responsive layout is enabled using the oj-med-condense and oj-med-justify-content-flex-end classes. -->
                <div>
                    <div id="ojAppNav2" class="demo-appheader-nav oj-lg-condense oj-lg-justify-content-center oj-xl-condense oj-xl-justify-content-flex-end" 
                         data-bind="ojComponent: {component: 'ojNavigationList', 
                          drillMode: 'none', 
                          edge: 'top', 
                          selection: $root.router.stateId(),
                          data: dataSource,
                          optionChange: $root.optionChangeHandler,
                          item: { template: 'app_nav_template' }
                          }" 
                         aria-label="Choose only one navigation element">
                    </div>
                </div>
            </div> <!-- oj-row -->
        </div> <!-- oj-col -->
    </div> <!-- oj-row -->
</div> <!-- demo-appheader -->

<!-- template for rendering app nav data -->
<script type="text/html" id="app_nav_template">
    <li>
        <a href="#">
            <span 
                data-bind="css: $data['iconClass']">
            </span>
            <!-- ko text: $data['name'] --> <!--/ko-->
        </a>
    </li>    
</script>

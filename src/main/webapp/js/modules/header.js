define(['knockout','ojs/ojcore', 'ojs/ojknockout', 'ojs/ojnavigationlist', 'ojs/ojoffcanvas', 'ojs/ojdatacollection-common', 'ojs/ojdialog'
], function (ko, oj) {

    function HeaderViewModel() {
        var self = this;

        // Button used for toggling off screen data.
        var offScreenDataButton = {
            "label": "offscreen-toggle",
            "iconClass": "oj-fwk-icon oj-fwk-icon-hamburger",
            "url": "#"
        };

        // Dropdown menu states
        self.menuItemSelect = function (event, ui) {
            switch (ui.item.attr("id")) {
                case "About":
                    $("#aboutDialog").ojDialog("open");
                    break;
                default:
            }
        };

        self.offScreenButtonIconClass = offScreenDataButton.iconClass;
        self.offScreenButtonLabel = offScreenDataButton.label;

        self.appDrawer =
                {
                    "edge": "start",
                    "displayMode": "push",
                    "selector": "#appDrawer",
                    "selection": "selectedItem"
                };

        // Data for application navigation
        var appNavData = [
            {
                name: 'Home',
                id: 'home',
                iconClass: 'demo-home-icon-24 demo-icon-font-24 oj-navigationlist-item-icon'
            },
            {
                name: 'About Me',
                id: 'aboutme',
                iconClass: 'demo-education-icon-24 demo-icon-font-24 oj-navigationlist-item-icon'
            }];

        self.dataSource = new oj.ArrayTableDataSource(appNavData, {idAttribute: 'id'});
     
        self.toggleAppDrawer = function ()
        {
            return oj.OffcanvasUtils.toggle(self.appDrawer);
        };

        // Close off-screen content once window becomes larger.
        var query = window.matchMedia("(min-width: 39.375rem)");
        var mqListener = function (event)
        {
            oj.OffcanvasUtils.close(self.appDrawer);
        };
        query.addListener(mqListener);

    }
    return HeaderViewModel;
});

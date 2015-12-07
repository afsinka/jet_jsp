define(['ojs/ojcore' ,'knockout'
   ], function(oj, ko) {
            function mainContentViewModel() {
                var self = this;               
                self.newLine = ko.observable("Text from JavaScript!");
            }
   return mainContentViewModel;
});
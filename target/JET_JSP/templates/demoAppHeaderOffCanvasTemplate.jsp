<div id="ojAppNav2" 
     data-bind="ojComponent: {component: 'ojNavigationList', 
                drillMode: 'collapsible', 
                selection: $data.selectedItem,
                data: $data.dataSource,
                optionChange: $parent.optionChangeHandler,
                item: { template: 'app_nav_template' }
                }" 
     >
</div>
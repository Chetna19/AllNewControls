sap.ui.controller("allnewcontrols.FirstPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf allnewcontrols.FirstPage
*/
//	onInit: function() {
//
//	},
	  onInit: function() {
		    var sURL, oModel, oView;

		    jQuery.sap.require("sap.ui.core.util.MockServer");
		    var oMockServer = new sap.ui.core.util.MockServer({
		      rootUri: "foo/"
		    });
		    oMockServer.simulate("allnewcontrols/metadata.xml", "allnewcontrols/");
		    oMockServer.start();
		    oModel = new sap.ui.model.odata.ODataModel("foo", true);
		    oModel.setCountSupported(false);
		    oView = this.getView();
		    oView.setModel(oModel);
		    oView.bindElement("/Products('1239102')");
		  },


	  onSliderMoved: function (oEvent) {
	    var iValue = oEvent.getParameter("value");
	    this.getView().byId("otbSubheader").setWidth(iValue + "%");
	    this.getView().byId("otbFooter").setWidth(iValue + "%");
	  },

	 
/*	onInit: function () {
	    // create any data and a model and set it to the view

	    var aMockMessages = [{
	      type: 'Error',
	      title: '1 Error message',
	      description: 'First Error message description'
	    }, {
	      type: 'Warning',
	      title: '1 Warning without description',
	      description: ''
	    }, {
	      type: 'Success',
	      title: '1 Success message',
	      description: 'First Success message description'
	    }, {
	      type: 'Error',
	      title: '2 Error message',
	      description: 'Second Error message description'
	    }, {
	      type: 'Information',
	      title: '1 Information message',
	      description: 'First Information message description'
	    }];

	    var oModel = new sap.ui.model.json.JSONModel();
	    oModel.setData(aMockMessages);

	    var viewModel = new sap.ui.model.json.JSONModel()
	    viewModel.setData({
	      messagesLength: aMockMessages.length + ''
	    });

	    this.getView().setModel(viewModel);

	    oMessagePopover1.setModel(oModel);
	    oMessagePopover2.setModel(oModel);
	    oMessagePopover3.setModel(oModel);
	  },

	  handleMessagePopoverPress1: function (oEvent) {
	    oMessagePopover1.openBy(oEvent.getSource());
	  },

	  handleMessagePopoverPress2: function (oEvent) {
	    oMessagePopover2.openBy(oEvent.getSource());
	  },

	  handleMessagePopoverPress3: function (oEvent) {
	    oMessagePopover3.openBy(oEvent.getSource());
	  }*/
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf allnewcontrols.FirstPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf allnewcontrols.FirstPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf allnewcontrols.FirstPage
*/
//	onExit: function() {
//
//	}

});
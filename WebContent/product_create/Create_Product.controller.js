sap.ui.controller("product_create.Create_Product", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf product_create.Create_Product
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf product_create.Create_Product
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf product_create.Create_Product
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf product_create.Create_Product
*/
//	onExit: function() {
//
//	}
	
	onProductCreate : function(){
	
		var data = {
				ID : parseInt(this.getView().byId("prodId").getValue()),
				Name : this.getView().byId("prodNameid").getValue(),
				Description : this.getView().byId("descriptionid").getValue(),
				ReleaseDate : new Date(),
				Price : parseInt(this.getView().byId("priceid").getValue()).toFixed(2),
				Rating : parseInt(this.getView().byId("ratingid").getValue())
				
		}
		
		var oModel = new sap.ui.model.odata.v2.ODataModel("proxy/https/services.odata.org/V2/(S(w2qt3hsxxuo2dtzy5xt3z0ut))/OData/OData.svc/");
		
		oModel.create("/Products", data, {
			success : function(){
				sap.m.MessageToast.show("Data Created");
			},
			error : function(){
				sap.m.MessageToast.show("Data Not Created");
			}
		})
	
		/*// update
		oModel.update("/Products("+prodId+")", data, {
			success : function(){
				sap.m.MessageToast.show("Data Created");
			},
			error : function(){
				sap.m.MessageToast.show("Data Not Created");
			}
		})
	//}

   oModel.remove("/Products("+prodId+")", {
		success : function(){
			sap.m.MessageToast.show("Data Created");
		},
		error : function(){
			sap.m.MessageToast.show("Data Not Created");
		}}) */
		
	}
});
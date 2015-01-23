var appDispatcher = require('../dispatcher/AppDispatcher');
var fluxCartConstants = require('../constants/FluxCartConstants');

var fluxCartActions = {
	receiveProduct: function(data){
		appDispatcher.handleAction({
			actionType: fluxCartConstants.RECEIVE_DATA,
			data: data
		})
	},

	selectProduct: function(index){
		appDispatcher.handleAction({
			actionType: fluxCartConstants.SELECT_PRODUCT,
			data: index
		})
	},

	addToCart: function(sku, update){
		appDispatcher.hanldeAction({
			actionType: fluxCartConstants.CART_ADD,
			sku: sku,
			update: update
		})
	},

	removeFromCart: function(sku){
		appDispatcher.handleAction({
			actionType: fluxCartConstants.CART_REMOVE,
			sku: sku
		})
	},

	updateCartVisible: function(cartVisible){
		appDispatcher.handleAction({
			actionType: fluxCartConstants.CART_VISIBLE,
			cartVisible: cartVisible
		})
	}
}

module.exports = fluxCartActions;
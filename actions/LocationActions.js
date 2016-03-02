var alt = require('../alt');

class LocationActions {
	updateLocations(locations){
		return locations
	}

	fetchLocations() {
		return (dispatch) => {
			// we dispatch an event here so we can have a "loading" state.
			dispatch(); // UNCERTAIN WHERE THIS DISPATCH IS COMING FROM - looks like LocationStore.js
				.then((locations) => {
					this.updateLocations(locations);
				})
				.catch((errorMessage) => { //uncertain where this error message is coming from - LocationStore.js ??
					this.locationsFailed(errorMessage);
				});
		}
	}

	locationsFailed(errorMessage) {
		return errorMessage;
	}
}

module.exports = alt.createActions(LocationActions);
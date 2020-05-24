// Imports
import React, { Component } from 'react';

// Import Search Bar Components
import SearchBar from 'material-ui-search-bar';

// Import React Scrit Libraray to load Google object
import Script from 'react-load-script';

class GoogleMapAutocomplete extends Component {
    // Define Constructor
    constructor(props) {
        super(props);

        // Declare State
        this.state = {
            // query: '',
            query: this.props.addressString,
            addrObj: null,
        };
        this.newValue = this.props.newValue;
    }

    handleScriptLoad = () => {
        // Declare Options For Autocomplete
        const options = {
            types: ['geocode'],
            componentRestrictions: {country: "vn"},
        };

        // Initialize Google Autocomplete
        /*global google*/ // To disable any eslint 'google not defined' errors
        this.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'),
            options,
        );

        // Avoid paying for data that you don't need by restricting the set of
        // place fields that are returned to just the address components and formatted
        // address.
        this.autocomplete.setFields(['address_components', 'formatted_address', 'geometry']);

        // Fire Event when a suggested name is selected
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    }

    handlePlaceSelect = () => {

        // Extract City From Address Object
        const addressObject = this.autocomplete.getPlace();
        const address = addressObject.address_components;

        // Check if address is valid
        if (address) {
            // Set State
            this.setState(
                {
                    query: addressObject.formatted_address,
                    addrObj: addressObject,
                }
            );
        }
    }

    render() {
        return (
            <div>
                <Script
                    url="https://maps.googleapis.com/maps/api/js?key=AIzaSyD7ZIdLTcp9ECQHsWr09nipuyWGxjOx964&libraries=places"
                    onLoad={this.handleScriptLoad}
                />
                <SearchBar id="autocomplete" placeholder="" value={this.state.query} onChange={(value) => { this.setState({ query: value }) }}
                    style={{
                        margin: '0 auto',
                        maxWidth: 800,
                    }}
                />
            </div>
        );
    }
}

export default GoogleMapAutocomplete;
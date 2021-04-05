var app = new Vue({
    el: '#app',
    data: {
        contacts: [],
        searchParam: "",
        message: ""
    },
    computed: {
        searchContact: function () {

            var searchResults = this.contacts
            var searchParam = this.searchParam;
            if (!searchParam) {
                return searchResults
            }

            searchResults = searchResults.filter(function (contact) {
                if (contact.first_name.toLowerCase().indexOf(searchParam) !== -1 || contact.email.toLowerCase().indexOf(searchParam) !== -1) {
                    return contact;
                }
            })

            return searchResults;
        }
    },
    mounted() {
        try {
            fetch("./MOCK_DATA.json")
                .then(response => {
                    return response.json();
                })
                .then(data => this.contacts = data);
        } catch (error) {
            console.error(error)
        }
    }
})

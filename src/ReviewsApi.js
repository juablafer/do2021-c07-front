class ReviewsApi {
    static API_PORT = process.env.REACT_APP_API_PORT || "8080";
    static API_BASE_URL = "http://localhost:" + ReviewsApi.API_PORT + "/api/v1";

    static requestHeaders(auth) {
        return auth ? {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwMDQzN2Q5ODU2MzllNDdkYWQ4MmQ4NyIsInVzZXJuYW1lIjoiVGVzdEp1YW5taSIsIm5hbWUiOiJKdWFubWkiLCJzdXJuYW1lIjoiQmxhbmNvIiwiZW1haWwiOiJqdWFibGFmZXJAYWx1bS51cy5lcyIsInBob25lIjoiNjY2MTExMjIyIiwiX192IjowfSwiaWF0IjoxNjExNDAxMDY2LCJleHAiOjE2MTE0ODc0NjZ9.VJp7mUvFtjqyT0GNMYnHogn4RlquQvRHZaHslaP9FxA"
        } : {}
    }

    static getAllReviews() {
        console.log("API PORT");
        console.log(process.env.REACT_APP_API_PORT);
        const headers = this.requestHeaders(false);
        const request = new Request(ReviewsApi.API_BASE_URL + "/pets", {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    static postReview(review) {
        const headers = this.requestHeaders(false);
        const request = new Request(ReviewsApi.API_BASE_URL + "/pets", {
            method: 'POST',
            headers: { ...headers, "Content-Type": "application/json" },
            body: JSON.stringify(review)
        });

        return fetch(request).then(response => {
            console.log(response)
            return response;
        });
    }

    static deleteReview(id) {
        const headers = this.requestHeaders(false);
        const request = new Request(ReviewsApi.API_BASE_URL + "/pets/" + id, {
            method: 'DELETE',
            headers: headers
        });

        return fetch(request).then(response => {
            return response;
        });
    }

    static putReview(id, review) {
        console.log(JSON.stringify(review))
        const headers = this.requestHeaders(false);
        const request = new Request(ReviewsApi.API_BASE_URL + "/pets/" + id, {
            method: 'PUT',
            headers: { ...headers, "Content-Type": "application/json" },
            body: JSON.stringify(review)
        });

        return fetch(request).then(response => {
            return response;
        });
    }
}

export default ReviewsApi;
import React from "react";

export const withQueries = (
    WrappedComponent,
    queries,
) => (props) => {
    const queryResults = queries.map(q => q());

    const isLoading = queryResults.some(r => r.isLoading);
    const error = queryResults.find(r => r.error)?.error;

    console.log('isLoading', isLoading);


    if (error) {
        return ("Error");
    }

    if (isLoading) {
        return "loading...";
    }
    return (
        <WrappedComponent {...props}/>
    );
};

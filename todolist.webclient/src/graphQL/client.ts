import {ApolloClient, from, InMemoryCache} from '@apollo/client';
import {createUploadLink} from "apollo-upload-client";


const httpLink = createUploadLink({
    uri: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'https://localhost:7248/graphql' : '/graphql',
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})
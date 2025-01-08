import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// No Subscription required for develop process

const httpLink = createHttpLink({
	uri: 'http://localhost:3007/graphql', // Your GraphQL server URL
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

export default client;

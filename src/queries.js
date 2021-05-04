import {useQuery} from "react-query";

export const options = {cacheTime: 0, staleTime: 333, refetchInterval: 5000};
// export const options = {};

const sleep = time => new Promise((resolve) => setTimeout(resolve, time));

const fetchTacos = async () => {
    await sleep(200);
    return ['Shrimps', 'Barbecue', 'Vegan'];
}

export const useTacos = () => {
    return useQuery('tacos', fetchTacos, options);
};


const fetchSandwiches = async () => {
    await sleep(120);
    return ['Ham', 'Cheese'];
}

export const useSandwiches = () => {
    return useQuery('sandwiches', fetchSandwiches, options);
};

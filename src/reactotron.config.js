import Reactotron from 'reactotron-react-native';
import mmkvPlugin from 'reactotron-react-native-mmkv';
import { QueryClientManager, reactotronReactQuery, } from 'reactotron-react-query';
import config from '../app.json';
import { queryClient, storage } from './App';
const queryClientManager = new QueryClientManager({
    queryClient,
});
Reactotron.configure({
    name: config.name,
    onDisconnect: () => {
        queryClientManager.unsubscribe();
    },
})
    .useReactNative()
    .use(mmkvPlugin({ storage }))
    .use(reactotronReactQuery(queryClientManager))
    .connect();

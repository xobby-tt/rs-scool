import { AppStore } from './app';

export * from './app';
export * from './cards-slice';

export type AppState = ReturnType<typeof AppStore.getState>;

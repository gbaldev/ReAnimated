export interface Screens {
  home: undefined;
  detail: {
    tag: string;
    imageUri: string;
  };
  info: {
    info: string;
  }
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends Screens {}
  }
}
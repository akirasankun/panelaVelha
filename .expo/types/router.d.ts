/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/cadastro` | `/(tabs)/explore` | `/(tabs)/login` | `/(tabs)/receita` | `/(tabs)/receitas` | `/_sitemap` | `/cadastro` | `/explore` | `/login` | `/receita` | `/receitas`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}

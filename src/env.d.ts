/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Declare module pour le contenu MDX
declare module '*.mdx' {
  const content: any;
  export default content;
}
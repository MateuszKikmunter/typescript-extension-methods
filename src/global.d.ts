export { }

declare global {
      interface String {
            capitalizeFirstLetter(this: string): string;
            isNullOrEmpty(this: string): boolean;
      }
}